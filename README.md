# Wellcome Landing Page Generator

Generates a simple Wellcome-branded HTMl landing page with a list of links.

## Installation

```bash
npm install -g wellcome-landing-page-generator
```

## Usage

- pipe in/out
```bash
cat mydata.json | wellcome-landing-page-generator > mylandingpage.html
```

- pipe from echo
```bash
echo '{ "title": "My Landing Page", "standfirst": "Hello there, general Kenobi!"}' | wellcome-landing-page-generator > mylandingpage.html
```

- specify input JSON file and output HTML file
```bash
wellcome-landing-page-generator --json mydata.json --output test.html
```
