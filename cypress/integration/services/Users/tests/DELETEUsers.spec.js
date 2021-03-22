import * as DELETEUsers from '../requests/DELETEUsers.request';
import * as GETUsers from '../requests/GETUsers.request';
import * as POSTUsers from '../requests/POSTUsers.request';

describe('DELETE Users', () => {
    it('Deletar um usuario', () => {
        GETUsers.consultarUsuarios().then((resAllUsers) => {
            DELETEUsers.deletarUser(resAllUsers.body.data[0].id).then((resDeleteUsers) => {
                expect(resDeleteUsers.body.code).equal(204);
            })
        })
    });

    it('Criar e deletar um usuario', () => {
        POSTUsers.adicionarUser().then((resAddUsers) => {
            DELETEUsers.deletarUser(resAddUsers.body.data.id).then((resDeleteUsers) => {
                expect(resDeleteUsers.body.code).equal(204);
            })
        })
    });

    it('Deletar um usuario que não existente', () => {
        DELETEUsers.deletarUser(0).then((resDeletUser) => {
            expect(resDeletUser.body.code).equal(404);
            expect(resDeletUser.body.data.message).equal('Resource not found')
        })
    });

    it('Deletar um usuario com token invalido', () => {
        GETUsers.consultarUsuarios().then((resAllUsers) => {
            DELETEUsers.deletarUserTokenInvalido(resAllUsers.body.data[0].id).then((tokenInvalid) => {
                expect(tokenInvalid.body.code).equal(401);
                expect(tokenInvalid.body.data.message).equal('Authentication failed')
            })
        })
    });
})
