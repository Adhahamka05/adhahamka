// Copy Paste From ChatGPT :>
// 1. Define Multi-Dimensional Array studentData
// Format: [Name, Credit Hour, Current GPA]

let studentData = [
    ["Ali Ahmad", 18, 3.75],
    ["Nur Aisyah", 15, 3.20],
    ["Daniel Lee", 21, 3.60],
    ["Siti Aminah", 12, 2.95]
];

// 2. Function to check Dean's List eligibility
function checkEligibility(creditHours, gpa) {
    if (gpa >= 3.50 && creditHours >= 12) {
        return "<span class='eligible'>Eligible for Dean's List</span>";
    } else {
        return "<span class='not-eligible'>Not Eligible</span>";
    }
}

// Output initial data
let outputDiv = document.getElementById("output");

function displayStudent(name, credit, gpa) {
    let status = checkEligibility(credit, gpa);

    outputDiv.innerHTML += `
        <div>
            <b>Name:</b> ${name}<br>
            <b>Credit Hours:</b> ${credit}<br>
            <b>Current GPA:</b> ${gpa}<br>
            <b>Status:</b> ${status}
            <hr style="border-top: 1px dotted #ccc;">
        </div>
    `;
}

// 3. Loop to display existing students
for (let i = 0; i < studentData.length; i++) {
    displayStudent(
        studentData[i][0],
        studentData[i][1],
        studentData[i][2]
    );
}

// 4. Form handling
document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let credit = parseInt(document.getElementById("credit").value);
    let gpa = parseFloat(document.getElementById("gpa").value);

    // Add to array (optional, but academic-friendly)
    studentData.push([name, credit, gpa]);

    // Display new student
    displayStudent(name, credit, gpa);

    // Reset form
    this.reset();
});
