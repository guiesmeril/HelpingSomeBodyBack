const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database/index');
const app = express();


app.use(express.json());
app.use(routes);
app.use(cors());
app.listen(3003);