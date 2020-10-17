# burger

Link to application:
https://floating-stream-28261.herokuapp.com/


## Description 
    
This application will allow a user to add and consume a burger! 
    
## Table of Contents 
          
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Test](#tests)
  * [Questions](#questions)
      
      
## Installation
      
This application was created using VS code, Node JS v12, express and express-handlebars. Javascript, HTML and CSS were used in the coding and design.  You will need to run the "npm install" from the VS Code CLI.  Included in the package JSON is dependencies for Node JS which includes NPM "express" and "express-handlebars" which is used extensively to create the application.  This was also created using MYSQL and the MySQL workbench.  You can download these at https://www.mysql.com/. Included in this project is a schema.sql file which can be run in the MySQL workbench to install the burgers_db database and schema.  This application uses the MVC model with the structured layout shown below -      
     
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgersController.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       ├── images
│       │   └── burger.png
│       └── js
│           └── script.js
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


## Usage 
      
When the user navigates to the website - they will be presented with screen which gives them the ability to add a burger.  When the user presses the submit button, the burger will appear in a list of burgers.  Now the fun begins!  Next to each burger on the list is a "Devour It" button.  If the user presses the "Devour It" button - it will be removed from the burger list and appear in the consumed list.  Because this uses a database, the data is persistent and any user who lands on the website can add and devour burgers!
      
      
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) MIT License

      
## Contributing
      
Please fork the repository in Github with permission.

      
## Tests
      
Testing can be done using the terminal and node js.  Included in this project is a seed.sql file which can be run from the MySQL Workbench to populate/ repopulate the burger_db table with data.  The GET, POST and PUT routes were also tested using the Postman application which can be found here -
https://www.postman.com/ . 

## Questions

Please reach me here if you have any questions -
Github: git99-src
      



      
      
---