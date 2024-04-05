const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (request, response) => {
    response.status(200).send({message:"Yay! It's wworking!"})
})

app.listen(PORT, () => console.log(`Server started executing at http://localhost:${PORT}/`))