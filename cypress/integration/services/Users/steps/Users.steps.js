import * as GETUsers from '../request/GETUsers.spec';

Given(/^que eu executo a requisicao GET users$/, () => {
	cy.log('antes');
	//GETUsers.consultarUsers();
	cy.log('depois')
	return true;
});

Then(/^a API deve retornar os dados da consulta$/, () => {
	return true;
});



