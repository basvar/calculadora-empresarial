document.getElementById('priceCalculator').addEventListener('submit', function(event) {
    event.preventDefault();

    var price = parseFloat(document.getElementById('price').value);
    var units = parseInt(document.getElementById('units').value);

    if (isNaN(price) || isNaN(units)) {
        alert('Por favor ingresa nÃºmeros vÃ¡lidos.');
        return;
    }

    var costPerUnit = price / units;
    var desiredProfitPercentage = 0.7; // 70% de margen de ganancia
    var totalCost = price;
    var desiredProfit = totalCost * desiredProfitPercentage;
    var totalPrice = totalCost + desiredProfit;
    var pricePerUnit = totalPrice / units;
    var profitPerUnit = pricePerUnit - costPerUnit;
    var totalProfit = profitPerUnit * units;

    document.getElementById('pricePerUnit').textContent = '$' + pricePerUnit.toFixed(2);
    document.getElementById('costPerUnit').textContent = '$' + costPerUnit.toFixed(2);
    document.getElementById('profitPerUnit').textContent = '$' + profitPerUnit.toFixed(2);
    document.getElementById('totalProfit').textContent = '$' + totalProfit.toFixed(2);

    document.getElementById('resultTable').classList.remove('hidden');
});