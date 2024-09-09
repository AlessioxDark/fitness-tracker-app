const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Client } = require('pg');
const bcrypt = require('bcrypt');
const client = new Client({
	host: 'localhost',
	user: 'postgres',
	port: 5432,
	database: 'Progetto1',
	password: 'Minu_Artu_2009',
});
const JWT_SECRET_KEY = 'jwtAuth';
client.connect();
router.post('/register', async (req, res) => {
	try {
		const { username, email, password } = req.body;
		console.log(password);
		// Hash della password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Query per inserire l'utente
		const insertQuery = `
			INSERT INTO users (id,username, email, password)
			VALUES (uuid_generate_v4(), $1, $2, $3)
			RETURNING id;
		`;
		const values = [username, email, hashedPassword];
		const result = await client.query(insertQuery, values);
		const userId = result.rows[0].id;
		// Generazione del token
		const token = jwt.sign({ userId: userId }, JWT_SECRET_KEY, {
			expiresIn: '1d',
		});

		res
			.status(200)
			.json({ message: 'User registered successfully', token: token });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;
