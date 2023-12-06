function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    // Display the calculation steps
    var calculationSteps = "K = S1 + S2 + S3<br>";
    calculationSteps += "K = " + sisi1 + " + " + sisi2 + " + " + sisi3 + "<br>";
    calculationSteps += "K = " + (sisi1 + sisi2 + sisi3);

    // Update the element with the calculation details
    var calculationStepsElement = document.getElementById('calculation-steps');
    calculationStepsElement.innerHTML = calculationSteps;
}

function resetForm() {
    document.getElementById('keliling-segitiga').reset();
    document.getElementById('calculation-steps').innerHTML = '';
}
