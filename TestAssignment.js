
describe('launch my app', ()=>  {

    it('app testing', ()=> { 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a[class="login"]').click()
        cy.get('input[id="email"]').type('abc@s.io')
        cy.get('input[id="passwd"]').type('Test@123')
        cy.get('button[id="SubmitLogin"]').click()
        cy.get('input[id="search_query_top"]').type('T-shirts')
        cy.get('button[class="btn btn-default button-search"]').click()
        //cy.get('div[class="product-container"]').trigger()
        cy.get('a[class="button ajax_add_to_cart_button btn btn-default"]').click()
        cy.get('a[class="btn btn-default button button-medium"]').click()
        cy.get('a[class="button btn btn-default standard-checkout button-medium"]').click()
        cy.get('button[class="button btn btn-default button-medium"]').click()
        cy.get('input[id="cgv"]').click()
        cy.get('button[class="button btn btn-default standard-checkout button-medium"]').click()
        cy.get('a[href="http://automationpractice.com/index.php?fc=module&module=bankwire&controller=payment"]').click()
        cy.get('button[class="button btn btn-default button-medium"]').click()
        cy.get('div[class="box"]').should('include.text', 'Your order on My Store is complete.')

     })

});