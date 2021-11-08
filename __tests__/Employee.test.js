const Employee = require('../lib/Employee')



test('Creates employee object', ()=>{
    const employ = new Employee()

    expect(typeof(employ)).toBe('object')
})

test('Creates Employee Name', ()=>{
    const name = 'Jovan';
    const employ = new Employee(name)

    expect(employ.name).toBe('Jovan')
})

test('Creates Employee Id', ()=>{
    const id = 50;
    const employ = new Employee('Jovan',id)

    expect(employ.id).toBe(id)
})

test('Creates Employee Email', ()=>{
    const email = 'jovan@gmail.com';
    const employ = new Employee('Jovan',50 ,email)

    expect(employ.email).toBe(email)
})

test('Returns name value', ()=>{
    const employ = new Employee('Jovan')

expect(employ.GetName()).toEqual(expect.stringContaining('Jovan'))
})

test('Returns id value', ()=>{
    const employ = new Employee('Jovan', 50)

expect(employ.GetId()).toEqual(expect.any(Number))
})

test('Returns email value', ()=>{
    const employ = new Employee('Jovan', 50, "email")

expect(employ.GetEmail()).toEqual(expect.any(String))
})

test('Returns role value', ()=>{
    const role = "Employee"
    const employ = new Employee('Jovan',50 ,'email')

expect(employ.GetRole()).toBe(role)
})