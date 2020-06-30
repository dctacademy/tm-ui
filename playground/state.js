// add element to an array 
const state = [10]
const value = [10,20]
// es5
    //push
    // console.log(state.push(value))

    // concat
    // list 
    console.log([].concat(value))

    // add 
    console.log(state.concat(value))

// es6
    // spread operator
    // list 
    console.log([...value])

    // add 
    console.log([...state, ...value ])


// object 
const customer = { name: 'ani', city: 'bangalore'}
const obj = { name: 'ani', city: 'mysore'}

// update object - es5
    console.log(Object.assign({}, customer, obj))
    
// update object - es6
    console.log({...customer, ...obj})

    const employeeIds = [1,2,3]

    // [{ employee: 1}, { employee: 2}, { employee: 3}]

    const result = employeeIds.map(function(ele){
        return { employee: ele}
    })

    console.log(result)

    const values = ['dct123', 'dct234', 'dct111', 'dct101']
    const searchTerm = '1'

    function search(values, searchTerm) {
        return values.filter(function(code){
            return code.includes(searchTerm)
        })
    }

    console.log(search(values, searchTerm))