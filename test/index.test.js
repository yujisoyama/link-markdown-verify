const pegaArquivo = require('../index');

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    })

    it('deve retornar array com resultados', async () => {
        expect(await pegaArquivo('./test/arquivos/texto1.md')).toEqual(arrayResult);
    })

    it('deve retornar mensagem "não há links"', async () => {
        expect(await pegaArquivo('./test/arquivos/texto1_semlinks.md')).toBe('não há links');
    })
})
