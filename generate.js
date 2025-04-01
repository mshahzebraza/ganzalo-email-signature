const fs = require('node:fs');
const mjml2html = require('mjml');
const Handlebars = require('handlebars');

// Read configuration
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

// Read MJML template
const mjmlTemplate = fs.readFileSync('./template/input-v2.mjml', 'utf8');

// Compile template with Handlebars
const template = Handlebars.compile(mjmlTemplate);

// Apply configuration to template
const mjmlWithConfig = template(config);

// Convert MJML to HTML
const htmlOutput = mjml2html(mjmlWithConfig, {
    validationLevel: 'soft' // Use soft validation to handle dynamic values
});

// Save the output
fs.writeFileSync('./template/output.html', htmlOutput.html);

console.log('Email signature generated successfully!'); 