let people = require('./functions.js')

test('2 should equal 2', () => {
    expect(people.returnTwo()).toBe(2)
})

test('greeting', () => {
    expect(people.greeting('James')).toBe('Hello James')
    expect(people.greeting('Jill')).toBe('Hello Jill')
})

test('add', () => {
    expect(people.add(1, 2)).toBe(3)
    expect(people.add(5, 9)).toBe(14)
})

