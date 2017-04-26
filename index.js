const fs = require('fs');
const path = require('path');
const njk = require('nunjucks');


const getData = args => new Promise(resolve => {
  if (args.json) {
    resolve(require(path.resolve(__dirname, args.json)));
  }
  else {
    let json = '';

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', chunk => json += chunk);
    process.stdin.on('end', _ => resolve(JSON.parse(json)));
  }
});

const generate = data => njk.render('template.njk', data);

module.exports = generate;

if (require.main === module) {

  async function run(args) {
    const data = await getData(args);
    const output = generate(data);

    if (args.output) {
      fs.writeFileSync(args.output, output);
    }
    else {
      process.stdout.setDefaultEncoding('utf-8');
      process.stdout.write(output);
      process.stdout.write('\n');
    }
  };

  const program = require('commander');

  program
    .version(require('./package.json').version)
    .option('-o, --output [filename]', 'Output to a specified file instead of stdout.')
    .option('--json [filename]', 'Get data from a specified file instead of stdin.')
    .parse(process.argv);

  run(program);
}
