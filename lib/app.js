const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const fs = require('fs');
let allCards = ``;
let employArr = []
let testArr = [{
    Engineer:"Engineer",
    Intern:"Intern",
    Manager:"Manager",

}]




// Prompt questions
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
        choices: ['Engineer','Intern','Manager',]

    }
]
inquirer
.prompt(questions)
// Role specific prompt questions.
.then(response =>{
    if (response.role === "Engineer"){

        inquirer.prompt({
            type: 'text',
            name: 'specific',
            message: 'Please enter employee"s gitHub'

        }).then(data=>{

const engineer = new Engineer(response.name, response.id, response.email ,data.specific)
employArr.push(engineer,)
console.log(employArr)
finishPrompt()
})


    }else if (response.role === "Intern"){
       
        
        inquirer.prompt({
            type: 'text',
            name: 'specific',
            message: 'Please enter the Employee"s School'

        }).then(data=>{
        const intern = new Intern(response.name, response.id, response.email , data.specific)
        employArr.push(intern)
        console.log(employArr)
        finishPrompt()
    })
    }else if (response.role === "Manager"){

        inquirer.prompt({
            type: 'text',
            name: 'specific',
            message: 'Please enter the Employee"s Office Number'

        }).then(data=>{
        const manager = new Manager(response.name, response.id, response.email , data.specific)
        employArr.push(manager)
        console.log(employArr)
        finishPrompt()
        })
    }

}).catch(err=>{
    console.log(err)
})
// Final Prompt asking if you want to add more Employees
const finishPrompt = () =>{
    inquirer.prompt({
        type: 'confirm',
        name: 'Done',
        message: 'Would you like to add more Employees?'

    }).then(data=>{
        if(data.Done === true){
            InitPrompt()

        }else{
genHTML()
        }
    })
}

}
// Cycles through Employee Array to generate individual cards 
const genHTML = ()=>{
    for(i = 0; i < employArr.length; i++)  {
        allCards = allCards +  card(employArr[i]) 
    }
    var page = generateHTML(allCards) 
    fs.writeFile('index.html', page ,(err) =>{
        if(err){
            console.log(err)
        }else{
            console.log('HTML GENERATED!')
        }
    })
        }
    
        
// The Default HTML
const generateHTML = (allCards) =>{
return `

     
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}
header {
  background-color: rgb(231, 87, 87);
  height: 200px;
  text-align: center;
  color: aliceblue;
}
header h1 {
  padding-top: 50px;
}
.card-container {
  
  height: 300px;
  width: 200px;
  margin-left: 150px;
  margin-top: 25px;
  box-shadow: 1px 1px 8px;
display: flex;
flex-wrap: wrap;
float:left;



}
.card-container h2 {
  padding-left: 5px;
  padding-top: 5px;
  color: #fff;

}
.card-info-container {
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: inline-block;
}
li{
  margin-bottom: 10px;
    list-style: none;
    background-color: #fff;
    border: 1px solid #f6f7f9;
    height: 30px;
    word-wrap: break-word;
}
.card-info {
  border: 1px solid #f6f7f9;
  padding-left: 5px;
  width: 95%;
  margin-left: 10px;
  height: 30px;
}
.card-header {
  background-color: #0077f7;
  height: 30%;
  width: 100%;
}
.card-body {
  background-color: #f6f7f9;
  height: 70%;
  width: 100%;
}
      
      </style>
      <body>
          <header>
              <h1>My team</h1>
          </header>
          ${allCards}
              </body>
              </html>
              `
          }
// Function for card creation
              const card = () =>{
                  cRole = employArr[i].role;
                  if(cRole === 'Engineer'){
                      var roleSpecific = `Github: <a href="https://github.com/${employArr[i].gitHub}" target="_blank">${employArr[i].gitHub}</a>`;
                  }else if (cRole === "Intern"){
                   var  roleSpecific = `School: ${employArr[i].school}`
                  }else if (cRole === "Manager"){
                 var roleSpecific = ` Office Number: ${employArr[i].officeNumber}`
                  }
  return  `
  <center>
  <div class="card-container">
  <div class="card-header">
  <h2>${employArr[i].name}</h2>
      <h2>
      ${employArr[i].role}
  </h2>
  <h2>
     
  </h2>
          </div>
          <div class="card-body">
              <div class="card-info-container">
  <div class="card-info">
      <ul>
          <li>ID: ${employArr[i].id} </li>
          <li>Email: <a href="mailto:${employArr[i].email}" target="_blank">${employArr[i].email}</a></li>
          <li>${roleSpecific}</li>
      </ul>
  </div>
  </div>
  
          </div>
      </div>
     `
}
    

module.exports = InitPrompt
