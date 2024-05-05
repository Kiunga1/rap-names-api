const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage' : {
        'age': 29,
        'birthName': 'Sheeyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper' : {
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown' : {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    },
    'kendrick lamar': {
        'age': 34,
        'birthName': 'Kendrick Lamar Duckworth',
        'birthLocation': 'Compton, California'
    },
    'jay-z': {
        'age': 52,
        'birthName': 'Shawn Corey Carter',
        'birthLocation': 'New York City, New York'
    },
    'eminem': {
        'age': 49,
        'birthName': 'Marshall Bruce Mathers III',
        'birthLocation': 'St. Joseph, Missouri'
    },
    'nas': {
        'age': 48,
        'birthName': 'Nasir bin Olu Dara Jones',
        'birthLocation': 'Brooklyn, New York'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,  response)=> {
    const rapperName = request.params.name.toLowerCase()
    if( rappers[rapperName] ){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen (PORT, ()=>{
    console.log(`The server is now runnning on port ${PORT}! Betta Go Catch It!`)
})