import * as POSTUsers from '../requests/POSTUsers.request';

describe('POST Users', () => {
    it('Adicioar um novo usuario', () => {
        POSTUsers.adicionarUser().then((response) => {
            expect(response.body.code).equal(201)
            expect(response.body).to.be.not.null
            expect(response.body.data.gender).to.eq("Male")
        })
    });

    it('Adicioar um novo usuario com token invalido', () => {
        POSTUsers.adicionarUserTokenInvalid().then((tokenInvalid) => {
            expect(tokenInvalid.body.code).equal(401);
            expect(tokenInvalid.body.data.message).equal('Authentication failed')
        })
    });

    it('Validacao duplicidade email', () => {
        POSTUsers.adicionarUserEmailDuplic().then((emailDuplic) => {
            expect(emailDuplic.body.code).equal(422);
            expect(emailDuplic.body.data[0]).has.property('message','has already been taken')
        })
    });

    it('Validacao gender invalido', () => {
        POSTUsers.adicionarUserGenderInvalido().then((genderInval) => {
            expect(genderInval.body.code).equal(422);
            expect(genderInval.body.data[0]).has.property('message','can be Male or Female')
        })
    });

    it('Validacao email invalido', () => {
        POSTUsers.adicionarUserEmailInvalido().then((emailInval) => {
            expect(emailInval.body.code).equal(422);
            expect(emailInval.body.data[0]).has.property('message','is invalid')
        })
    });

    it('Validacao campos em branco', () => {
        POSTUsers.adicionarUserCamposVazios().then((respBlank) => {
            expect(respBlank.body.code).equal(422);
            for(var i in respBlank.body.data){
                expect(respBlank.body.data[i]).has.property('field',respBlank.body.data[i].field)
                expect(respBlank.body.data[i]).has.property('message',"can't be blank")
            }
        })
    });
})



//cy.server()
//cy.route('POST', '**/users').as('postUser');
//cy.wait('@postUsers')
//Cypress.env('salvandoo retorno do response em uma variavel temporaria', response.body.name)