// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
      .findByText(/about/i)
      .click()
      .findByText(/title of the movie/i)
      .click()
      .type('Kekec')
      .findByText(/your review/i)
      .click()
      .type('Lorem ipsum...')
      .findByText(/average/i)
      .click()
      .findByText(/would you recommend this movie/i)
      .click()
      .findByText(/submit/i)
      .click()
      .findByText(/done/i)
      .findByText(/home/i)
      .click()
      .findByText(/welcome to your vue.js app/i)
  })
})
