/// <reference types="cypress" />
import * as GETUsers from '../requests/GETUsers.request';
import * as POSTUsers from '../requests/POSTUsers.request';
import usuariosSchema from '../contracts/Users.contract';

describe('GET Users', () => {
    it('Listar todos os usuários', () =>{
        GETUsers.consultarUsuarios().then((response) => {
            expect(response.body.code).equal(200)
            expect(response.body).to.be.not.null
        })
    });

    it('Cadastrar e detalhar um usuario', () => {
        POSTUsers.adicionarUser().then((resAddUsers) => {
            GETUsers.detalharUsuarios(resAddUsers.body.data.id).then((resDetalheeUsers) => {
                expect(resDetalheeUsers.body.code).equal(200);
                //expect(resDetalheeUsers.body.data.id).has.property('id', 2)
            })
        })
    });

    it('Detalhar usuario inexistente', () => {
        GETUsers.detalharUsuarios(0).then((resDetalheeUsers) => {
            expect(resDetalheeUsers.body.code).equal(404);
            expect(resDetalheeUsers.body.data.message).equal('Resource not found')
        })
    });

    it('Validar o contrato da listagem de usuarios', () => {
        GETUsers.consultarUsuarios().should((response) => {
            return usuariosSchema.validateAsync(response.body.data[0])
        })
    });
});
