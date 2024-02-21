const app = require('./app')
const PORT = 3008;

const fs = require('fs');
const csv = require('csv-parser')

app.get('/api/train_data', (req, res) => {
    let csvTrainData = [];

    fs.createReadStream('developers/data/train_models.csv')
        .pipe(csv())
        .on('data', (data) => {
            csvTrainData.push(data)
        })

})


app.listen(PORT, () => {
    console.log(`app listening to port ${PORT}`)
})


