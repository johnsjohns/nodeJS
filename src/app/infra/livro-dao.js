class LivroDao{

    constructor (db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) =>{        
            this._db.all(
                'SELECT * FROM livros',
                (erro, resultados) =>{
                    if(erro) return reject ('Não foi possivel listar os livros!');
                    return resolve(resultados)
                }   
            )
        });
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO livros(
                    titulo,
                    preco,
                    descricao
                ) values (?,?,?)
            `, [
                livro.titulo,
                livro.preco,
                livro.descricao
            ], function(erro){
                if (erro) {
                    console.log(erro);
                    return reject('Não foi possivel adicionar o livro!');
                }
                resolve();
            }
            )
        });
    }

    buscaPorId(id){
        return new Promise((resolve, reject) => {

        });
    }

    atualiza(livro){
        return new Promise((resolve, reject) => {

        });

    }

    remove(id){
        return new Promise((resolve, reject) => {

        });
    }

}

module.exports = LivroDao;