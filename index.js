const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const garden = require('./routes/garden');
const cors = require('cors');

// Instantiate express server:
const app = express();

// Define port number:
const PORT = process.env.PORT || 5000;

// DB Config/Connection:
let CONNECTION_STRING;
if (!process.env.NODE_ENV) {
	const MONGODB_PW = require('./config/keys').mongoURI;
	CONNECTION_STRING = `mongodb+srv://eric-cruz:${MONGODB_PW}@mvp.3eehr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
} else {
	CONNECTION_STRING = process.env.MONGODB_URI;
}

mongoose
	.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.log(err));

// Middleware:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/garden', garden);

// Serve ANY other route with the homepage
app.get('*', (req, res) => {
	console.log(__dirname);
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`);
});
