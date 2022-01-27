import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import * as selectors from '../Pages/selectors.js'

Given('Open amazon URL',()=>
{
    cy.fixture('Amazon').then(Amazon => 
    {
        //Launching the URL
        cy.visit(Amazon.URL)
    })
})

When('Search for the term Shoes',()=>
{
    cy.fixture('Amazon').then(Amazon => 
    {
        //Searching with shoes keyword
        cy.get(selectors.SEARCH_BOX_SELECTOR).type(Amazon.SEARCH_TEXT).type('{enter}')
        cy.wait(5000)
    })
})

Then('Validate the result appeared by term shoes',()=>
{
    cy.fixture('Amazon').then(Amazon => 
    {
        //verifing the search results
         cy.get(selectors.SHOES_TEXT).contains(Amazon.SEARCH_TEXT)
        cy.wait(9000)
    })

})

Then('Apply any two filters and validate the results',()=>
{
    //Applying 4Star and up filter in left side pannel
    cy.get(selectors.FOURSTAR_ABOVE).click()
    cy.wait(5000)
    //sorting by Avg.customer review on Top_Right corner
    cy.get(selectors.SORT_BY).click()
    cy.get(selectors.AVG_CUSTOMER_REVIEW).click()
    cy.wait(4000)
    //validating with the rating Icons for every product 
    cy.get(selectors.RATING_ICONS).should('be.visible')
    cy.wait(4000)

})

Then('Validate details in product detail page and add product to cart',()=>
{
    //Retriving the product title from product detail page
    cy.get(selectors.FIRST_PRODUCT).first().click()
    cy.get(selectors.PRODUCT_TITLE).then(function(title)
    {
        //Printing product title in console
        cy.log("Title of the Product: ", title.text())

    })
    //Selecting the size before adding product to cart
    cy.get(selectors.SPECIAL_SIZE).click()
    cy.get(selectors.SIZE_DROPDOWN).click()
    cy.get(selectors.SIZE).click()
    cy.wait(3000)
    //Clicking on AddToCart button
    cy.get(selectors.ADD_TO_CART_BUTTON).click()
    cy.wait(3000)
    //Retriving and printing success message in console after adding product to cart
    cy.get(selectors.SUCCESS_MESSAGE).then(function(message){
    cy.log("Success message after adding product to cart: " , message.text())
    cy.wait(5000)
  })
})