const app = require('./app')
const PORT = 3000;

const fs = require('fs');
const csv = require('csv-parser')

app.get('/api/train_data', (req, res) => {
    let csvTrainData = [];

    fs.createReadStream('developers/data/train_models.csv')
        .pipe(csv())
        .on('data', (data) => {
            csvTrainData.push(data);
        })
        .on('end', () => {
            // Send the JSON data as the response
            res.json(csvTrainData);
        })
        .on('error', (err) => {
            console.error('Error parsing CSV file:', err);
            res.status(500).send('Error parsing CSV file');
        });


})



const welcomeMessage = `
    Welcome to TravelTalk (Developer's Edition).\n
    If you're seeing this message, it means the server is successfully running.\n
    You are now running this website at port ${PORT}.\n
    Please open this server in your browser by typing in:\n
    localhost:${PORT}
    You should be able to see the home page of the website.
    `

app.listen(PORT, () => {
    console.log(welcomeMessage)
})


