const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/auth');
app.use(
	cors({
		origin: 'http://localhost:3000', // Specifica il dominio da cui accettare le richieste
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specifica i metodi HTTP consentiti
		allowedHeaders: 'Content-Type,Authorization', // Specifica gli headers consentiti
	})
);
app.use(express.json());
app.use('/api/auth', authRouter);
app.get('/', (req, res) => {});
app.listen(5000);
