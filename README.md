This application is developed to support ServiceNow's Predictive Intelligent with Thai language.

### procedure :
- Create connection and new application with ServiceNow SDK
  - Create instance connection (example)
    `now-sdk auth save devuser1 --host https://myinstance.service-now.com --username adminuser1 --default`
  - Create scope application (example)
    `now-sdk convert x_snc_example example-app`
  - Pull repo
  - Fetch application update (example)
    `now-sdk fetch --auth devuser1`
  - Build application (example)
    `now-sdk build`
  - Deploy application (example)
    `now-sdk deploy --auth devuser1`

### how to use :
- Create business rule or UI action in new application
- Call function script
  `const { cutThWord } = require('./src/server/script.js');`
- Use function by cutThWord(`Thai String`);
<img width="1199" alt="image" src="https://github.com/user-attachments/assets/6600d4d3-abdf-44d9-9716-641b5c699854">


### add-on word
- Create new Array Words in `../src/server/dict/`
- Call new Array in `../src/server/function/dict.js`
<img width="489" alt="image" src="https://github.com/user-attachments/assets/3687b06d-0361-4af2-9345-e1545de900b7">
