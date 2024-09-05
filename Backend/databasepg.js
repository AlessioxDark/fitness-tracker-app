const { Client } = require('pg');

const client = new Client({
	host: 'localhost',
	user: 'postgres',
	port: 4500,
	database: 'Progetto1',
	password: 'Minu_Artu_2009',
});

client.connect();

client.query('SELECT * FROM car', (err, res) => {
	if (!err) {
		console.log(res.rows);
	} else {
		console.log('ERRORE', err);
	}
	// console.log(res);
});
