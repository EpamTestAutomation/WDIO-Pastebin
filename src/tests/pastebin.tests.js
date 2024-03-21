describe('Pastebin page', () => {

    beforeEach(async () => {
        /**
         * Open the Pastebin website.
         */
        await browser.url('https://pastebin.com/')
    })

    /**
     * Create 'New Paste' with the following attributes
     */
    it('Task1 - create new paste: ', async () => {
        //Click on the "New Paste" button
        await $('a.header__btn').click()
        //Enter the code "Hello from WebDriver" in the provided text area
        await $('textarea#postform-text').setValue('Hello from WebDriver')
        //Set expiration to "10 Minutes"
        await $('#select2-postform-expiration-container').selectByVisibleText('10 Minutes')
        //Set the title "helloweb"
        await $('input.form-control').setValue('helloweb')
        //Submit the new paste
        await $('button[type="submit"]').click()
    })
})