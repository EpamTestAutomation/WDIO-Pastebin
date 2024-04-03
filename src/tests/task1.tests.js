describe('Pastebin page test suite', () => {

    beforeEach(async () => {
        await browser.url('https://pastebin.com/');
    })

    it('Create New Paste on pastebin', async () => {
        //Enter the code "Hello from WebDriver" in the text area
        const codeTextarea = await $('textarea#postform-text')
        await codeTextarea.setValue('Hello from WebDriver')
    
        //Set expiration to "10 Minutes"
        const expirationSelect = await $('div.form-group.field-postform-expiration div.col-sm-9.field-wrapper')
        await expirationSelect.click()

        const expirationList = await $('ul#select2-postform-expiration-results > li:nth-child(3)')
        await expirationList.click()
        
        //Set the title "helloweb"
        const titleInput = await $('input#postform-name')
        await titleInput.setValue('helloweb')

        //Submit the new paste
        await $('.-big.btn').click()
    })

})