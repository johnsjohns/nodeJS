const { check } = require('express-validator/check')
const cors = require('cors');

const LivroControlador = require('../Controladores/livro-controlador');
const livroControlador = new LivroControlador();
const BaseControlador = require('../Controladores/base-controlador');
const baseControlador = new BaseControlador();

module.exports = (app) => {
   
    const rotasBase = BaseControlador.rotas();
    const rotasLivro = LivroControlador.rotas();

    app.use(cors());

    app.get(rotasBase.home, baseControlador.home());

    app.get(rotasLivro.lista, livroControlador.lista());

    app.get(rotasLivro.cadastro, livroControlador.formularioCadastro());

    app.get(rotasLivro.edicao, livroControlador.formularioEdicao());

    app.post(rotasLivro.lista, [
            check('titulo').isLength({ min: 5 }).withMessage("O titulo precisa ter no mínimo 5 letras!"),
            check('preco').isCurrency().withMessage("O preço precisa ter uma valor monetário valido!")
        ],
        livroControlador.cadastra()
        );

    app.put(rotasLivro.lista, livroControlador.edita());

    app.delete(rotasLivro.delecao, livroControlador.remove());
};