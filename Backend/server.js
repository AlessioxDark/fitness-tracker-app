const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/auth');
const workoutsRouter = require('./routes/workouts');

app.use(
	cors({
		origin: 'http://localhost:3000', // Specifica il dominio da cui accettare le richieste
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specifica i metodi HTTP consentiti
		allowedHeaders: 'Content-Type,Authorization', // Specifica gli headers consentiti
	})
);
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/workouts', workoutsRouter);
app.get('/', (req, res) => {});
app.listen(5000);
