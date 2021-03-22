Feature: Consultar usuario

Como usuario, desejo consultar todos os usuários do sistema

Scenario: Consultar usuario
    Given que eu executo a requisicao GET users 
    Then a API deve retornar os dados da consulta
