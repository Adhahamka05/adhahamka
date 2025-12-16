// 1. Define Multi-Dimensional Array studentData
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]

let studentData = [
    ["Ali Ahmad", 18, 3.75],
    ["Nur Aisyah", 15, 3.20],
    ["Daniel Lee", 21, 3.60],
    ["Siti Aminah", 12, 2.95]
];

// 2. Create function to measure dean list eligibility
// Criteria: GPA >= 3.50 AND Credit Hours >= 12

function checkEligibility(creditHours, gpa) {
    if (gpa >= 3.50 && creditHours >= 12) {
        return "<span class='eligible'>Eligible for Dean's List</span>";
    } else {
        return "<span class='not-eligible'>Not Eligible</span>";
    }
}

// Get output div
let outputDiv = document.getElementById("output");

// 3. Create Looping (for loop) to print student data and eligibility
for (let i = 0; i < studentData.length; i++) {

    let name = studentData[i][0];
    let creditHours = studentData[i][1];
    let gpa = studentData[i][2];

    let status = checkEligibility(creditHours, gpa);

    // 4. Print all output (inside loop)
    outputDiv.innerHTML += `
        <div>
            <b>Name:</b> ${name}<br>
            <b>Credit Hours:</b> ${creditHours}<br>
            <b>Current GPA:</b> ${gpa}<br>
            <b>Status:</b> ${status}
            <hr style="border-top: 1px dotted #ccc;">
        </div>
    `;
}
