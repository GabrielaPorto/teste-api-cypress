///  <reference types="cypress" />

function consultarUsuarios(){
    return cy.request({
        method: 'GET',
        url: 'users',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    })
}

function detalharUsuarios(idUser){
    return cy.request({
        method: 'GET',
        url: `users/${idUser}`,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        failOnStatusCode: false
    })
}

export {consultarUsuarios, detalharUsuarios};