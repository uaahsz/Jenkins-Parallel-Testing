///<reference types="cypress" />
 
describe('Tables Test Suite', function(){
  
    it('Tables', function(){
      cy.visit('http://testautomationpractice.blogspot.com/') 

      // 1) Checking the value presence anywhere in the table
      cy.get('#HTML1').contains('Learn Selenium').should('be.visible')
      
      // 2) Checking the value present in a specific row and column the table
      cy.get('#HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium')
    
      // 3) Checking the value present based on a condition by iterating row
      cy.get('table[name=BookTable]>tbody > tr td:nth-child(2)').each(($e1,index,$list) => {
          const text=$e1.text()
          if(text.includes("Amod"))
          {
              cy.get("table[name=BookTable]>tbody > tr td:nth-child(1)").eq(index).then(function(bname)
              {
                  const bookName= bname.text()
                  expect(bookName).to.equal("Master In Java")
              })
          }
        })
  
    })
  
})
    