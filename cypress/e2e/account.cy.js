context("Update birthdate", () => {
    it("Logs in", () => {
        cy.visit("https://v1-dev-booking.barespace.app/barespace")

        //click the button with door and arrow icon
        cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > div.border-2.border-line.border-t-0.border-x-0 > div > div > div.lg\\:hidden > div > button:nth-child(3) > svg > path').click();
        //enter email
        cy.get('#email').type("stephen.costello@outlook.ie")
        //enter password
        cy.get('#password').type("Password123!")
        //click login
        cy.get('form > .btn').click()
        //click the account icon     
        cy.get("div[class='lg:hidden'] button:nth-child(3) svg path", { timeout: 10000 }).click();
        //click on account settings
        cy.get(':nth-child(1) > .group', { timeout: 10000 }).click();
        //enter birth date
        cy.get('#day').select('28');
        //enter birth month
        cy.get('#month').select('9');
        //enter birth year
        cy.get('#year').select('1990');
        //click save
        cy.get(':nth-child(2) > .card > form > .btn').click();

    })
    context("update adress", () => {
        it('updates the address', () => {
            cy.visit("https://v1-dev-booking.barespace.app/barespace")
            //click the button with door and arrow icon
            cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > div.border-2.border-line.border-t-0.border-x-0 > div > div > div.lg\\:hidden > div > button:nth-child(3) > svg > path').click();
            //enter email
            cy.get('#email').type("stephen.costello@outlook.ie")
            //enter password
            cy.get('#password').type("Password123!")
            //click login
            cy.get('form > .btn').click()
            //click the account icon     
            cy.get("div[class='lg:hidden'] button:nth-child(3) svg path", { timeout: 10000 }).click();
            //click on account settings
            cy.get(':nth-child(1) > .group', { timeout: 10000 }).click();
            //enter new address
            cy.get('[placeholder="Enter a location"]').type('k67h6k8');
            //save changes
            cy.get(':nth-child(2) > .card > form > .btn').click();

        })
        context("update check boxes", () => {
            it('updates the check boxes', () => {
                cy.visit("https://v1-dev-booking.barespace.app/barespace")
                //click the button with door and arrow icon
                cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > div.border-2.border-line.border-t-0.border-x-0 > div > div > div.lg\\:hidden > div > button:nth-child(3) > svg > path').click();
                //enter email
                cy.get('#email').type("stephen.costello@outlook.ie")
                //enter password
                cy.get('#password').type("Password123!")
                //click login
                cy.get('form > .btn').click()
                //click the account icon     
                cy.get("div[class='lg:hidden'] button:nth-child(3) svg path", { timeout: 10000 }).click();
                //click on account settings
                cy.get(':nth-child(1) > .group', { timeout: 10000 }).click();
                //click on first check box
                cy.get(':nth-child(1) > .accent-primary').click()
                //click on second check box
                cy.get(':nth-child(2) > .accent-primary').click()
                //click on third check box
                cy.get(':nth-child(3) > .accent-primary').click()
                //click on fourth check box
                cy.get(':nth-child(4) > .accent-primary').click()
            })
        })

    })
})






