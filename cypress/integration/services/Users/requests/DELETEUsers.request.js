/// <reference types="cypress" />

function deletarUser (idUser){
    return cy.request({
        method: 'DELETE',
        url: `users/${idUser}`,
        auth: {
            bearer: 'bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    })
}

function deletarUserTokenInvalido (idUser){
    return cy.request({
        method: 'DELETE',
        url: `users/${idUser}`,
        auth: {
            bearer: '545bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    })
}

export {deletarUser, deletarUserTokenInvalido};