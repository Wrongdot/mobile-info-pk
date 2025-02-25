// comparePhones.js

// Function to compare two phones
function comparePhones() {
    const phone1 = document.getElementById('phone1').value;
    const phone2 = document.getElementById('phone2').value;
    const result = document.getElementById('comparison-result');

    // Example phone data (replace with real data)
    const phoneData = {
        'Samsung A32': { display: '6.5-inch', storage: '128GB', battery: '5000mAh' },
        'IPhone 16': { display: '6.1-inch', storage: '256GB', battery: '4500mAh' },
        'Samsung S24': { display: '6.7-inch AMOLED', storage: '512GB', battery: '6000mAh' },
        'Samsung A16': { display: '6.3-inch OLED', storage: '128GB', battery: '4000mAh' }
    };

    // Check if the same phone is selected twice
    if (phone1 === phone2) {
        result.innerHTML = `<p style="color: red;">Please select two different phones to compare.</p>`;
        return;
    }

    // Get data for the selected phones, if they exist in phoneData
    const phone1Data = phoneData[phone1];
    const phone2Data = phoneData[phone2];

    if (!phone1Data || !phone2Data) {
        result.innerHTML = `<p style="color: red;">Invalid phone selection. Please select valid phones.</p>`;
        return;
    }

    // Display the comparison result in a table
    result.innerHTML = `
        <h3>Comparison Result</h3>
        <table border="1" cellpadding="10" cellspacing="0">
            <tr><th>Feature</th><th>${phone1}</th><th>${phone2}</th></tr>
            <tr><td>Display</td><td>${phone1Data.display}</td><td>${phone2Data.display}</td></tr>
            <tr><td>Storage</td><td>${phone1Data.storage}</td><td>${phone2Data.storage}</td></tr>
            <tr><td>Battery</td><td>${phone1Data.battery}</td><td>${phone2Data.battery}</td></tr>
        </table>
    `;
}
