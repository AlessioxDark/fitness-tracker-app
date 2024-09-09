const express = require('express');
const router = express().Router();

const { Client } = require('pg');

const client = new Client({
	host: 'localhost',
	user: 'postgres',
	port: 4500,
	database: 'Progetto1',
	password: 'Minu_Artu_2009',
});

router.post('/register', (req, res) => {
	client.connect();
	const { username, email, password } = req.body;
	const query = `
    INSERT INTO users (username, email, password)
    VALUES (${username}, ${email}, ${password})
    RETURNING *;
  `;
});

module.exports = router;
