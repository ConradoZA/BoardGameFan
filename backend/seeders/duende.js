const mysql = require('mysql2');
const https = require('https');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitChildren: true, charsAsChildren: true });

let req = https.get("https://www.boardgamegeek.com/xmlapi/boardgame/174430", function(res) {
    let data = '';
    res.on('data', function(stream) {
        for (let i = 0; i <= stream.length; i++) {
            for (let j = 0; j <= i.length; j++) {
                const childs = i[j];
                data += childs;
            }

        }

    });
    res.on('end', function() {
        parser.parseString(data, function(error, result) {
            if (error === null) {
                console.log(result);
            } else {
                console.log(error);
            }
        });
    });
});







// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'bgdb'
// }).promise();

// fetch('https://www.pokemon.com/es/api/pokedex/kalos')
//     .then(res => {
//         const allGames = res.data
//             pokemitos.filter((pokemon, index, self) => index === self.findIndex((p) => ( //quitar duplicados
//                     p.name === pokemon.name
//                 )))
//             Para cuando tenga que filtrar duplicados
//             .forEach(game => {
//                 connection.query(`INSERT INTO bgdb (id, abilities, weakness, number, name, ThumbnailImage, type) VALUES (null,'${pokemon.abilities}', '${pokemon.weakness}', '${pokemon.number}','${pokemon.name}','${pokemon.ThumbnailImage}','${pokemon.type}' )`)
//             })
//             .catch(error => {
//                 console.error(error)
//             })
//     })

// xml2js.parseStringPromise(allGames)
//     .then(function(result) {
//         const jsonGames = JSON.stringify(result);
//         console.log('Done');
//     })
//     .catch(function(err) {
//         Failed
//     });