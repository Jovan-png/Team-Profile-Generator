const Engineer = require('../lib/Engineer')


test('Creates Engineer object', ()=>{
    const employ = new Engineer()

    expect(typeof(employ)).toBe('object')
})

test('Creates Engineer Name', ()=>{
    const name = 'Jovan';
    const employ = new Engineer(name)

    expect(employ.name).toBe('Jovan')
})

test('Creates Engineer Id', ()=>{
    const id = 50;
    const employ = new Engineer('Jovan',id)

    expect(employ.id).toBe(id)
})

test('Creates Engineer Email', ()=>{
    const email = 'jovan@gmail.com';
    const employ = new Engineer('Jovan',50 ,email)

    expect(employ.email).toBe(email)
})
test('Creates Engineer github', ()=>{
    const gitHub = 'jovan-png';
    const employ = new Engineer('Jovan',50 ,'email', gitHub)

    expect(employ.gitHub).toBe(gitHub)
})
test('Returns name value', ()=>{
    const employ = new Engineer('Jovan')

expect(employ.GetName()).toEqual(expect.stringContaining('Jovan'))
})

test('Returns id value', ()=>{
    const employ = new Engineer('Jovan', 50)

expect(employ.GetId()).toEqual(expect.any(Number))
})

test('Returns email value', ()=>{
    const employ = new Engineer('Jovan', 50, "email")

expect(employ.GetEmail()).toEqual(expect.any(String))
})

test('Returns role value', ()=>{
    const role = "Engineer"
    const employ = new Engineer('Jovan',50 ,'email')

expect(employ.GetRole()).toBe(role)
})