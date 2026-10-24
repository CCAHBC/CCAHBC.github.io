document.getElementById('copy-btn').addEventListener('click', function() {
    // Get the text from the code span
    const codeText = document.getElementById('classroom-code').innerText;
    
    // Copy the text to the clipboard
    navigator.clipboard.writeText(codeText).then(() => {
        const copyBtn = document.getElementById('copy-btn');
        
        // Change button feedback styling
        copyBtn.innerText = 'Copied!';
        copyBtn.classList.add('copied');
        
        // Reset the button after 2 seconds
        setTimeout(() => {
            copyBtn.innerText = 'Copy';
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});