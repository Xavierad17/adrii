// Function to toggle the visibility of fields based on selected calculation type
function toggleFields() {
    // Get the selected calculation type from the dropdown
    const calculationType = document.getElementById('calculation-type').value;

    // Get the compound fields section
    const compoundFields = document.getElementById('compound-fields');

    // Show or hide compound fields based on the selected calculation type
    if (calculationType === 'compound' || calculationType === 'both') {
        compoundFields.style.display = 'block';
    } else {
        compoundFields.style.display = 'none';
    }
}

// Function to calculate interest based on user input
function calculateInterest() {
    // Prompt: Get input values
    const principal = parseFloat(document.getElementById('principal').value); // Principal amount
    const rate = parseFloat(document.getElementById('rate').value) / 100;     // Annual interest rate (as a decimal)
    const time = parseFloat(document.getElementById('time').value);           // Time in years
    const compounds = parseInt(document.getElementById('compounds').value);   // Number of compounds per year
    const calculationType = document.getElementById('calculation-type').value; // Calculation type selected

    // Prompt: Initialize variables for interest and total amounts
    let simpleInterest = 0, compoundInterest = 0, siTotal = 0, ciTotal = 0;

    // Prompt: Calculate Simple Interest if 'simple' or 'both' is selected
    if (calculationType === 'simple' || calculationType === 'both') {
        simpleInterest = principal * rate * time; // Simple Interest formula
        siTotal = principal + simpleInterest;     // Total amount with Simple Interest

        // Display the Simple Interest result
        document.getElementById('si-result').textContent = 
            `Simple Interest: $${simpleInterest.toFixed(2)}, Total Amount: $${siTotal.toFixed(2)}`;
        document.getElementById('si-result').style.display = 'block';
    } else {
        // Hide Simple Interest result if not selected
        document.getElementById('si-result').style.display = 'none';
    }

    // Prompt: Calculate Compound Interest if 'compound' or 'both' is selected
    if (calculationType === 'compound' || calculationType === 'both') {
        compoundInterest = principal * (Math.pow((1 + rate / compounds), compounds * time) - 1); // Compound Interest formula
        ciTotal = principal + compoundInterest; // Total amount with Compound Interest

        // Display the Compound Interest result
        document.getElementById('ci-result').textContent = 
            `Compound Interest: $${compoundInterest.toFixed(2)}, Total Amount: $${ciTotal.toFixed(2)}`;
        document.getElementById('ci-result').style.display = 'block';
    } else {
        // Hide Compound Interest result if not selected
        document.getElementById('ci-result').style.display = 'none';
    }
}
