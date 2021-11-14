const Intern = require('../lib/Intern')



test('Creates Intern object', ()=>{
    const employ = new Intern()

    expect(typeof(employ)).toBe('object')
})

test('Creates Intern Name', ()=>{
    const name = 'Jovan';
    const employ = new Intern(name)

    expect(employ.name).toBe('Jovan')
})

test('Creates Intern Id', ()=>{
    const id = 50;
    const employ = new Intern('Jovan',id)

    expect(employ.id).toBe(id)
})
test('Creates Intern Email', ()=>{
    const email = 'jovan@gmail.com';
    const employ = new Intern('Jovan',50 ,email)

    expect(employ.email).toBe(email)
})

test('Returns name value', ()=>{
    const employ = new Intern('Jovan')

expect(employ.GetName()).toEqual(expect.stringContaining('Jovan'))
})

test('Returns id value', ()=>{
    const employ = new Intern('Jovan', 50)

expect(employ.GetId()).toEqual(expect.any(Number))
})

test('Returns email value', ()=>{
    const employ = new Intern('Jovan', 50, "email")

expect(employ.GetEmail()).toEqual(expect.any(String))
})

test('Returns role value', ()=>{
    const role = "Intern"
    const employ = new Intern('Jovan',50 ,'email')

expect(employ.GetRole()).toBe(role)
})