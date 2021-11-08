const inquirer = require('inquirer')
const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')
const fs = require('fs')
let employArr = []


InitPrompt = () => {
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "Please Enter The Employee's Name."

    },
    {
        type: 'input',
        name: 'id',
        message: "Please Enter The Employee's Id Number."

    },
    {
        type: 'input',
        name: 'email',
        message: "Please Enter The Employee's Email"

    },
    {
        type: 'list',
        name: 'role',
        message: "Please Select The Employee's role or choose to be done",
        choices: ['Engineer','Intern','Manager','Done']

    }
]
inquirer
.prompt(questions)
.then(response =>{
    if (response.role === "Engineer"){
const engineer = new Engineer(response.name, response.id, response.email ,response.role)
employArr.push(engineer)
console.log('Done')
InitPrompt()
    }else if (response.role === "Intern"){
        const intern = new Intern(response.name, response.id, response.email ,response.role)
        employArr.push(intern)
        InitPrompt()
    }else if (response.role === "Manager"){
        const manager = new Manager(response.name, response.id, response.email ,response.role)
        employArr.push(manager)
        InitPrompt()
    }else {
        .then(=>PageTransitionEven)
        generateHTML()

    }

})






}


generateHTML = () =>{
    fs.writeFile("index.html",
    
    
    `
    <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" href="/dist/style.css">
       <title>Team Profile</title>
   </head>
   <body>
       <header>
           <h1>My team</h1>
       </header>
       <div class="card-container">
           <div class="card-header">
   <h2>
       Jovan
   </h2>
   <h2>
   </h2>
           </div>
           <div class="card-body">
               <div class="card-info-container">
   <div class="card-info">
       <p>ID:</p>
   </div>
   <div class="card-info">
       <p>Email:</p>
   </div>
   <div class="card-info">
   <p>Github:</p>
       
   </div>
   </div>
   
           </div>
       </div>
   </body>
   </html>
   `)
   }
   
   
   
   





module.exports = InitPrompt