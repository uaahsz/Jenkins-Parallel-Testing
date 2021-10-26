let log = console.log;

describe('loops', () => {
    it('should loop', () => {
        // log('1');
        // cy.visit('https://www.google.com');
        // log('2');
        // cy.get('.gLFyf').type('hello world');
        // log('3')

        //for loop
        // for (let i = 0; i < 3; i++) {
        //     log('= ', i);
        //     cy.then(() => log('* ', i));
        // }
        
        //for loop modified
        cy.visit('https://www.google.com');
        for (let i = 0; i < 3; i++) {
            cy.get('.gLFyf').type('hello world');
        }

        // for (let i = 0; i < 3; i++) {
        //     cy.log(i)
        //     }
        
        //for each loop
        // cy.wrap(['a', 'b', 'c']).each((ele) => log(ele));

        //for each loop//
        // cy.get('a').each((ele) => log(ele.text()));
        
        //community question 1
        // let list = [];

        // for(let i = 0; i < 10; i++){
        //     cy.then(() => {
        //         list.push(i);
        //     });
        // }

        // log(list.length)
        // cy.then(() => {
        //     log(list.length);
        // });        
    })
})