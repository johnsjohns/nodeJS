const templates = require('../views/template');
const LivroControlador = require('./livro-controlador');
class BaseControlador {

    static rotas(){
        return{
        home: '/', 
        login: '/login'
        }
    }

    home() {
        return function(req, resp) {
            resp.marko(templates.base.home);
        };
    }

    login() {

        return function(req, resp) {
            resp.marko(templates.base.login);
        };
    }

    efetuaLogin() {

        return function(req, resp, next) {
            const passport = req.passport;

            // Lógica de login.
            password.authenticate('local', (erro, usuario, informacao) => {
                if(info){
                    return resp.marko(template.base.login);
                }

                if(erro){
                    return next(erro);
                }

                req.login(usuario, (erro) => {
                    if(erro){
                        return next(erro);
                    }

                    return resp.redirect(LivroControlador.rotas().lista);

                });


            })(req, res, next);

        };
    }


}

module.exports = BaseControlador;