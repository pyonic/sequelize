const express = require('express');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require('./routes/index');
//Handle POST datas
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api',routes);


app.use((error, req, res, _next) => {
    const status = (error && error.output) ? error.output.statusCode : 500;
    console.error(error, JSON.stringify(req.body), req.query);
    res.status(status).send({message: error.message});
});

app.listen(PORT, async () => {
	await sequelize.sync();
	console.log(`Serving at port 3000`);
});
