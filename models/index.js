//models/index.js
var placeholder = require('placeholder');
placeholder.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfolio');
