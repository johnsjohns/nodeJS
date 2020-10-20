const cors = require('cors');
const baseRotas = require('./base-rotas');
const livroRotas = require('./livro-rotas');

module.exports = (app) => {
    app.use(cors());
    baseRotas(app);
    livroRotas(app);
};