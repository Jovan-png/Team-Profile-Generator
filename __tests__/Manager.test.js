const Manager = require('../lib/Manager')



test('Creates Manager object', ()=>{
    const employ = new Manager()

    expect(typeof(employ)).toBe('object')
})

test('Creates Manager Name', ()=>{
    const name = 'Jovan';
    const employ = new Manager(name)

    expect(employ.name).toBe('Jovan')
})

test('Creates Manager Id', ()=>{
    const id = 50;
    const employ = new Manager('Jovan',id)

    expect(employ.id).toBe(id)
})

test('Creates Manager Email', ()=>{
    const email = 'jovan@gmail.com';
    const employ = new Manager('Jovan',50 ,email)

    expect(employ.email).toBe(email)
})
test('Creates Manager Office Number', ()=>{
    const officeNumber = 1;
    const employ = new Manager('Jovan',50 ,'email', officeNumber)

    expect(employ.officeNumber).toBe(officeNumber)
})

test('Returns name value', ()=>{
    const employ = new Manager('Jovan')

expect(employ.GetName()).toEqual(expect.stringContaining('Jovan'))
})

test('Returns id value', ()=>{
    const employ = new Manager('Jovan', 50)

expect(employ.GetId()).toEqual(expect.any(Number))
})

test('Returns email value', ()=>{
    const employ = new Manager('Jovan', 50, "email")

expect(employ.GetEmail()).toEqual(expect.any(String))
})

test('Returns role value', ()=>{
    const role = "Manager"
    const employ = new Manager('Jovan',50 ,'email')

expect(employ.GetRole()).toBe(role)
})