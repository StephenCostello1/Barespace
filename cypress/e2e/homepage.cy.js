describe("home page", () => {
  beforeEach(() => {
    //go to barespace website before each test
    cy.visit("https://v1-dev-booking.barespace.app/barespace")
  })

  context("Homepage", () => {
    //verify the homepage has loaded by checking the text in the h4 
    it("the h4 contains the correct text", () => {
      cy.get('.text-black').contains(
        "Choose your Barespace Test & Try location"
      )
    })
  })

  context("Locations", () => {
    //verify that the locations are present
    it("verfies the locations are visible", () => {
      cy.get('.overflow-auto > :nth-child(1)').contains(
        "Anne St S, Dublin, Irlanda"
      )
      cy.get('.overflow-auto > :nth-child(2)').contains(
        "Glasgow, UK"
      )
    })
  })

  context("Selection modal", () => {
    it("verifies selection modal pop up appears when book is clicked on Ireland", () => {
      // Click the button
      cy.get('.overflow-auto > :nth-child(1)').click();

      // Assert that the popup appears
      cy.get('#headlessui-dialog-panel-6').should('be.visible');
    })

    it("verifies selection modal pop up appears when book is clicked on UK", () => {
      // Click the button
      cy.get('.overflow-auto > :nth-child(2)').click();

      // Assert that the popup appears
      cy.get('#headlessui-dialog-panel-6').should('be.visible');
    })
  })

  context("Sign up", () => {
    it("clicks the sign up button and fills in sign up data", () => {
      //click the button with door and arrow icon
      cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > div.border-2.border-line.border-t-0.border-x-0 > div > div > div.lg\\:hidden > div > button:nth-child(3) > svg > path').click();
      //click on sign up now
      cy.get('.my-4 > div > .link').click()
      //enter first name
      cy.get('#first_name', { timeout: 1000 }).type('Stephen', { timeout: 1000 })
      //enter last name
      cy.get('#last_name', { timeout: 1000 }).type('Costello', { timeout: 1000 })
      //enter email
      cy.get('#email', { timeout: 1000 }).type('stephen.costello@outlook.ie', { timeout: 1000 })
      //enter phone number
      cy.get('.vti__input', { timeout: 1000 }).type('857261874', { timeout: 1000 })
      //enter password
      cy.get('#password', { timeout: 1000 }).type('Password123!', { timeout: 1000 })
      //retype password
      cy.get('#retry_password', { timeout: 1000 }).type('Password123!', { timeout: 1000 })
      //click t&c's check box
      cy.get(':nth-child(4) > .accent-primary').click()
      //click subscription check box
      cy.get(':nth-child(5) > .accent-primary').click()
      //click submit
      cy.get('form > .btn').click()
    })

  })

  context("Login", () => {
    //verify user is able to login
    it("Logs in", () => {
      //click the button with door and arrow icon
      cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > div.border-2.border-line.border-t-0.border-x-0 > div > div > div.lg\\:hidden > div > button:nth-child(3) > svg > path').click();
      //enter email
      cy.get('#email').type("stephen.costello@outlook.ie")
      //enter password
      cy.get('#password').type("Password123!")
      //click login
      cy.get('form > .btn').click()
    })
  })

  context("Logout", () => {
    it("Logs out", () => {
      // Locate the button and store it as an alias
      cy.get("div[class='lg\\:hidden'] button:nth-child(3) svg").as('logoutIcon');

      // Click on the logout icon
      cy.get('@logoutIcon').click();

      // Continue with the rest of the test steps
      cy.get('#email').type("stephen.costello@outlook.ie");
      cy.get('#password').type("Password123!");
      cy.get('form > .btn', { timeout: 10000 }).click();

      // Click the person icon
      cy.get("div[class='lg\\:hidden'] button:nth-child(3) svg").click();

      //click sign out button
      cy.get('.group > .btn').click()

      //verify user is signed out
      //click the button with door and arrow icon
      cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > div.border-2.border-line.border-t-0.border-x-0 > div > div > div.lg\\:hidden > div > button:nth-child(3) > svg > path').click();

      //verify login header is visible
      cy.get('.m-auto > .text-lg').should('be.visible');
    });
  });

  context("Forgot password", () => {
    it("resets password", () => {
      //click the button with door and arrow icon
      cy.get('#__nuxt > div > div.bg-primaryBg.min-h-screen.min-w-screen > div > main > div.border-2.border-line.border-t-0.border-x-0 > div > div > div.lg\\:hidden > div > button:nth-child(3) > svg > path').click();

      //click forgot password
      cy.xpath("//a[@class='link relative z-10']").click();

      //enter email address
      cy.get('#email').type('stephen.costello@outlook.ie')

      //click reset password
      cy.get('form > .btn').click()
    })
  })



})


