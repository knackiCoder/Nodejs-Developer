// const { parse } = require('csv-parse');
// const { createReadStream } = require('fs');

// const result = [];

// const habitable = (planet) => {
//     return planet['koi_disposition'] === 'CONFIRMED' && 
//     planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && 
//     planet['koi_prad'] < 1.6;
// }

// createReadStream('keplers.csv')
// .pipe(parse({
//     comment: '#',
//     columns: true 
// }))
// .on('data', (data) => {
//     if (habitable(data)) {
//         result.push(data)
//     }
// })
// .on('err', (err) => {
//     console.log(err)
// })
// .on('end', () => {
//     console.log(result.map((planet) => (
//         planet['kepler_name'])
//         ))
//     console.log(`${result.length} is the amount of habitable planets found`);
//     console.log('done')
// })

const http = require('http');


const PORT = 3000;

const server = http.createServer()

server.on('request', (req, res) => {
    if(req === '/friends') {
        // res.writeHead(200, {
        //     "Content-type": 'Application/json'
        // })
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json')
        res.end(JSON.stringify({
            name: 'Sir Isaac Newton',
            id: 1}
            ))
    }
});

server.listen(PORT, () => {
    console.log(`listeninig on port ${PORT}`) 
})