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

		res
			.status(201)
			.json({ message: 'User registered successfully', success: true });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;
		const selectQuery = `SELECT id , password FROM users WHERE email = $1`;
		const values = [email];
		const result = await client.query(selectQuery, values);

		const user = result.rows[0];
		const isMatch = bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({ error: 'Invalid password' });
		}
		const token = jwt.sign({ userId: user.id }, JWT_SECRET_KEY, {
			expiresIn: '1d',
		});
		console.log(token);
		res
			.status(200)
			.json({ message: 'Login Successful', token: token, success: true });
	} catch (err) {
		console.log(err);
		res.status(500).json({ message: 'Internal server Error', success: false });
	}
});

module.exports = router;
