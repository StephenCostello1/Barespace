context("Book appointment", () => {


    it("chooses Ireland location", () => {
        cy.visit("https://v1-dev-booking.barespace.app/barespace")

        // Click the button
        cy.get('.overflow-auto > :nth-child(1)').click();

        // click book appointment
        cy.get('[tabindex="0"]').click()

        cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > section > div.mt-4.pt-1.overflow-auto.sm\\:max-h-\\[60vh\\].px-2.-mx-2 > div:nth-child(1) > button', { timeout: 10000 })
            .click();

        cy.get('.max-w-lg > .btn').click()

        cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > section > div.mt-2.overflow-auto.sm\\:max-h-\\[60vh\\].px-2.-mx-2.pb-20.lg\\:pb-0.pt-1 > div:nth-child(2)')
            .click();

        cy.get('.px-4 > .btn').click()

        cy.get('.gap-2 > :nth-child(2)').click()

        cy.get('.overflow-auto > :nth-child(1)').click()

        cy.get('.overflow-auto > :nth-child(1)').click()

        cy.get('.max-w-lg > .btn').click()

        cy.get('.mt-4 > :nth-child(1)').click()

        cy.get('.max-w-lg > .btn').click()

        cy.get('#email').type('stephen.costello@outlook.ie')

        cy.get('#password').type('Password123!')

        cy.get('form > .btn').click()

        cy.get('.max-w-lg > .btn').click()

        cy.get('#headlessui-dialog-panel-30 > .input', { timeout: 1000 }).type('none')

        cy.get('#headlessui-dialog-panel-30 > .btn', { timeout: 1000 }).click()

        cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > section > div:nth-child(4) > ul > li:nth-child(2)')
            .click();

 








    })
})





