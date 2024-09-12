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
router.get('/', authMiddleware, async (req, res) => {
	try {
		const searchWorkouts = await client.query(
			'SELECT workout_id,workout_data,created_at FROM workouts'
		);
		res.status(200).json({ data: searchWorkouts.rows });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'internal server error' });
	}
});
router.post('/add', authMiddleware, async (req, res) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const { userId } = jwt.verify(token, JWT_SECRET_KEY);
		console.log(req.body);
		const body = req.body;

		const InsertQuery =
			'INSERT INTO workouts (workout_id,user_id,workout_data,created_at) VALUES (uuid_generate_v4(), $1,$2, CURRENT_TIMESTAMP)';
		const values = [userId, JSON.stringify(body)];

		const result = await client.query(InsertQuery, values);
		res.status(201).json({ message: 'successful added workout', succes: true });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'internal server error' });
	}
});
module.exports = router;
