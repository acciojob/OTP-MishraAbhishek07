//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.code');
    
    // Automatically focus on the next input when a number is typed
    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            if (this.value) {
                // Focus on the next input
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        });

        // Handle backspace to delete the last digit
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value === '') {
                // Focus on the previous input if backspace is pressed
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });

    // Focus on the first input initially
    inputs[0].focus();
});
