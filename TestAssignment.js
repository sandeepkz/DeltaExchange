
describe('launch my app', ()=>  {

    it('app testing', ()=> { 

        // Launching Automation Parctice Website
        cy.visit('http://automationpractice.com/index.php')
        // Clicking on Login Button 
        cy.get('a[class="login"]').click()
        // Enter Login Id
        cy.get('input[id="email"]').type('abc@s.io')
        // Enter Password
        cy.get('input[id="passwd"]').type('Test@123')
        // Click on Submit Button
        cy.get('button[id="SubmitLogin"]').click()
        // Search 'T-shirt' in search box input field
        cy.get('input[id="search_query_top"]').type('T-shirts')
        // Click on Search Button
        cy.get('button[name="submit_search"]').click()
        // Click on 'Add to Cart' button 
        cy.get('a[href="http://automationpractice.com/index.php?controller=cart&add=1&id_product=1&token=06ae167020d23d4f6889e9397b77cd8b"]').click()
        // Click on 'Proceed to Checkout' button
        cy.get('a[class="btn btn-default button button-medium"]').click()
        // Click on 'Proceed to Checkout' button on 'SHOPPING-CART SUMMARY' screen
        cy.get('a[class="button btn btn-default standard-checkout button-medium"]').click()
        // Click on 'Proceed to Checkout' button on 'ADDRESSES' screen
        cy.get('button[class="button btn btn-default button-medium"]').click()
        // Clicking on 'Terms of service' checkbox
        cy.get('input[id="cgv"]').click()
        // Click on 'Proceed to Checkout' button on 'SHIPPING' screen
        cy.get('button[class="button btn btn-default standard-checkout button-medium"]').click()
        // Click on 'pay by bank wire' widget
        cy.get('a[href="http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment"]').click()
        cy.get('button[class="button btn btn-default button-medium"]').click()
        // Verfying whether 'Your order on My Store is complete' is dispalyed or not on the confirmation box.
        cy.get('div[class="box"]').should('include.text', 'Your order on My Store is complete.')

     })

})
