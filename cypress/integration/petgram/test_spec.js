/*global describe, it, expect, cy */

describe('Petgram', function () {
  it('Funcionamiento de la App', function () {
    cy.visit('/')
  })

  it('navegamos a una categoria y vemos fotos', function () {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Navegar con la navbar a la home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('Los usuarios no registrados ven el inicio de sesion y registo', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
  })
})
