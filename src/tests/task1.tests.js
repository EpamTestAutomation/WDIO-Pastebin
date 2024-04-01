describe('Pastebin page test suite: ', () => {

    /**
    * Open the Pastebin website.
    */
    beforeEach(async () => {
        await browser.url('https://pastebin.com/');
    })

    /** 
     * Create 'New Paste' with the following attributes
     * Code: "Hello from WebDriver"
     * Paste Expiration: "10 Minutes"
     * Paste Name / Title: "helloweb"
     */
    it('Create new paste: ', async () => {
        //Click on the "New Paste" button
        //const newPasteButton = await $('a.header__btn')
        //newPasteButton.click()

        //Enter the code "Hello from WebDriver" in the text area
        const codeTextarea = await $('textarea#postform-text')
        await codeTextarea.setValue('Hello from WebDriver')
    
        //Set expiration to "10 Minutes"
        const expirationSelect = await $('div.form-group.field-postform-expiration div.col-sm-9.field-wrapper')
        //await expirationSelect.scrollIntoView();
        await expirationSelect.click()

        const expirationList = await $('ul#select2-postform-expiration-results > li:nth-child(3)')
        await expirationList.click()
        
        //Set the title "helloweb"
        const titleInput = await $('input#postform-name')
        await titleInput.setValue('helloweb')

        //Submit the new paste
        const buttonSubmit = await $('.-big.btn')
        await buttonSubmit.click()

    })

})