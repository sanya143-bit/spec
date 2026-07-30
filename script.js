document.getElementById('calculateBtn').addEventListener('click', function() {
    let income = document.getElementById('income').value;
    let tax = income * 0.1; // 10% tax calculation example
    document.getElementById('taxDue').value = tax;
});