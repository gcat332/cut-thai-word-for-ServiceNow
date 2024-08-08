This application is developed to support ServiceNow's Predictive Intelligent with Thai language.

### procedure :
- Create connection and new application with ServiceNow SDK
  Create instance connection
  `now-sdk auth save devuser1 --host https://myinstance.service-now.com --username user1 --default`
  Create scope application
  `now-sdk convert x_snc_example example-app`

### how to use :
- Create business rule or UI action in new application
- Call function script
  `const { cutThWord } = require('./src/server/script.js');`
- Use function by cutThWord(`Thai String`);

### add-on word
- Create new Array Words in `../src/server/dict/`
- Call new Array in `../src/server/function/dict.js`
