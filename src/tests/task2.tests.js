describe('Pastebin page test suite', () => {

    beforeEach(async () => {
        await browser.url('https://pastebin.com/');
    })

     it('Create New Paste on pastebin and verifications', async () => {
        //Enter the code "Hello from WebDriver" in the text area
        const codeTextarea = await $('textarea#postform-text')
        await codeTextarea.setValue('git config --global user.name  "New Sheriff in Town"' +
        '\ngit reset $(git commit-tree HEAD^{tree} -m "Legacy code")' +
        '\ngit push origin master --force')

        // set Syntax Highlighting: "Bash"
        const syntaxSelect = await $('div.form-group.field-postform-format > div.col-sm-9.field-wrapper')
        await syntaxSelect.click()
        
        const syntaxInput = await $('input.select2-search__field')
        await syntaxInput.setValue('Bash')
        
        const bashOption = await $('ul#select2-postform-format-results li:nth-child(1) li:nth-child(1)')
        await bashOption.click()

         //Set expiration to "10 Minutes"
        const expirationSelect = await $('div.form-group.field-postform-expiration div.col-sm-9.field-wrapper')
        await expirationSelect.click()

        const expirationList = await $('ul#select2-postform-expiration-results > li:nth-child(3)')
        await expirationList.click()

         //Set the title "how to gain dominance among developers"
         const titleInput = await $('input#postform-name')
         await titleInput.setValue('how to gain dominance among developers')

        //Submit the new paste
        await $('.-big.btn').click()

        // Verify page title matches paste name/title
        const pageTitle = await $('h1=how to gain dominance among developers')
        await expect(pageTitle).toHaveText('how to gain dominance among developers')

        // Verify Syntax is set to Bash
        const linkSyntax = await $('div.left > a')
        await expect(linkSyntax).toHaveText('Bash')

        // Verify the code matches the one from paragraph 2
        const displayedCode = await $('div.source').$('li:nth-child(2)').getText()
        await expect(displayedCode).toContain('git reset $(git commit-tree HEAD^{tree} -m "Legacy code")')
    })
})