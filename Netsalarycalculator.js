function calculateNetSalary() {
    let basicSalary = parseFloat(prompt("Enter the basic salary: "));
    let benefits = parseFloat(prompt("Enter the benefits: "));
    
    let grossSalary = basicSalary + benefits;
    
    // Calculate PAYE (Tax) based on KRA tax rates
    let paye = calculatePAYE(grossSalary);
    
    // Calculate NHIF Deductions based on NHIF rates
    let nhifDeductions = calculateNHIF(grossSalary);
    
    // Calculate NSSF Deductions
    let nssfDeductions = calculateNSSF(grossSalary);
    
    // Calculate Net Salary
    let netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;
    
    console.log(Gross Salary: ${grossSalary});
    console.log(PAYE (Tax): ${paye});
    console.log(NHIF Deductions: ${nhifDeductions});
    console.log(NSSF Deductions: ${nssfDeductions});
    console.log(Net Salary: ${netSalary});
}

function calculatePAYE(grossSalary) {
    // Using the KRA tax rates for 2024
    let paye = 0;
    
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        paye = 4483.25 + (grossSalary - 32333) * 0.3;
    }
    
    return paye;
}

function calculateNHIF(grossSalary) {
    // Using NHIF rates for 2024
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

function calculateNSSF(grossSalary) {
    // Using NSSF rates for 2024
    return Math.min(grossSalary * 0.06, 1080);
}

calculateNetSalary();