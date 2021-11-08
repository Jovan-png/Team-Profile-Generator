const inquirer = require('inquirer')
const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')

class startPrompt {
constructor(){
    this.name
}

InitPrompt = () => {
inquirer
     .prompt({
    type: 'list',
    name: 'prompt',
    message: 'Choose one to start with',
    choices: ['Employee','Engineer', 'Intern','Manager']
})
.then((response)=> {
if(data.prompt === 'Employee'){
    console.log('Hello')
}else if (data.prompt === 'Employee'){
    console.log('NOO')
}else if (data.prompt === 'Employee'){

}else if(data.prompt)
})







}




}






module.exports = startPrompt