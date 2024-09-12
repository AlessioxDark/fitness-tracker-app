const express = require('express');

const router = express.Router();

const jwt = require('jsonwebtoken');
const { Client } = require('pg');
const client = new Client({
	host: 'localhost',
	user: 'postgres',
	port: 5432,
	database: 'Progetto1',
	password: 'Minu_Artu_2009',
});
const JWT_SECRET_KEY = 'jwtAuth';
client.connect();

async function authMiddleware(req, res, next) {
	const token = req.headers.authorization.split(' ')[1];

	if (!token) {
		return res.status(401).json({
			message: 'your session is expired or you arent logged in. Please sign in',
			succes: false,
		});
	}
	try {
		const { userId } = jwt.verify(token, JWT_SECRET_KEY);

		const searchUser = await client.query('SELECT * FROM users WHERE id = $1', [
			userId,
		]);
		if (!searchUser.rows[0]) {
			return res.status(401).json({
				message:
					'your session is expired or you arent logged in. Please sign in',
				succes: false,
			});
		}
		next();
	} catch (err) {
		console.log(err);
	}
}
router.post('/add', authMiddleware, async (req, res) => {
	const token = req.headers.authorization.split(' ')[1];
	const { userId } = jwt.verify(token, JWT_SECRET_KEY);

	const { name, desc, exercises, last } = req.body;

	const InsertQuery =
		'INSERT INTO workouts (workout_id,user_id,workout_data,created_at) VALUES (uuid_generate_v4(), $1, CURRENT_TIMESTAMP)';
	const values = [
		userId,
		JSON.stringify({
			name: name,
			desc: desc,
			last: last,
			exercises: exercises,
		}),
	];

	const result = await client.query(InsertQuery, values);
});
module.exports = router;
