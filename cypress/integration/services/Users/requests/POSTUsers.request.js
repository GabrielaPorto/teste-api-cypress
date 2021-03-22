/// <reference types="cypress" />
 
const payloadAddUser = require('../payloads/add-user.json')
var randomEmail = require('../../../../../node_modules/random-email')
var email

function adicionarUser() {
    payloadAddUser.body.email = randomEmail();
    email = payloadAddUser.body.email;
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: payloadAddUser.body,
        auth: {
            bearer: 'bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

function adicionarUserTokenInvalid() {
    payloadAddUser.body.email = randomEmail();
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: payloadAddUser.body,
        auth: {
            bearer: '6548bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

function adicionarUserEmailDuplic() {
    payloadAddUser.body.email = email;
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: payloadAddUser.body,
        auth: {
            bearer: 'bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

function adicionarUserEmailInvalido() {
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: {
            "name": "Teste",
            "gender": "Male",
            "status": "Active",
            "email": "teste.teste",
        },
        auth: {
            bearer: 'bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

function adicionarUserGenderInvalido() {
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: {
            "name": "Teste",
            "gender": "teste",
            "status": "Active",
            "email": "teste.teste@gmail.com",
        },
        auth: {
            bearer: 'bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

function adicionarUserCamposVazios() {
    return cy.request({
        method: 'POST',
        url: 'users',
        failOnStatusCode: false,
        body: {
            "name": "",
            "gender": "",
            "status": "",
            "email": "",
        },
        auth: {
            bearer: 'bc0c63291255fb31a2f3c1be9d8587106d2f22fdbe798528cd2fc3b35a6fb3d0'
        },
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    })
}

export {adicionarUser, adicionarUserTokenInvalid, adicionarUserEmailDuplic, adicionarUserCamposVazios, adicionarUserEmailInvalido, adicionarUserGenderInvalido};