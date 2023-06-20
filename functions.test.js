const { describe } = require("node:test")
const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require(`./functions.js`)

test(`Return the number two `,()=>{
    expect(returnTwo()).toEqual(2)
})

test(`Should Return Hello James`, ()=>{
    expect(greeting(`James`)).toEqual(`Hello, James`)
    expect(greeting(`Jill`)).toEqual(`Hello, Jill`)
    expect(greeting(`Jimmy`)).not.toBe(`Hey, Jill`)
})

test(`Should Return three`, ()=>{
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
})

describe(`Testing Math Functions`, ()=>{
    test(`Multiply should return fifteen`, ()=>{
        expect(multiply(3,5)).toEqual(15)
    })
    test(`Divide should return four`, ()=>{
        expect(divide(12,3)).toBe(4)
    })
    test(`Subtract to return five`, ()=>{
        expect(subtract(20,15)).toEqual(5)
    })
})