'use strict';

var fs = require('fs'),
    WebService = require('./WebService');


var config,
    configPath,
    service;


configPath = 'src/conf/config.json';

if (!fs.existsSync(configPath)) {
  process.stderr.write('Application configuration not found,' +
      ' run "node src/lib/pre-install"\n');
  process.exit(1);
}

config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
service = WebService(config);


service.start();
