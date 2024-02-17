function convertKmToM() {
    var km = document.getElementById('distance').value;
    if (km && km !== '0') {
        var meters = km * 1000;
        document.getElementById('results').innerText = km + ' km son ' + meters + ' metros.';
    } else {
        document.getElementById('results').innerText = 'Por favor ingrese un valor válido para la distancia.';
    }
}

function convertMtoCm() {
    var m = document.getElementById('distance').value;
    if (m && m !== '0') {
        var cm = m * 100;
        document.getElementById('results').innerText = m + ' metros son ' + cm + ' centímetros.';
    } else {
        document.getElementById('results').innerText = 'Por favor ingrese un valor válido para la distancia.';
    }
}

function convertFtToIn() {
    var ft = document.getElementById('distance').value;
    if (ft && ft !== '0') {
        var inches = ft * 12;
        document.getElementById('results').innerText = ft + ' pies son ' + inches + ' pulgadas.';
    } else {
        document.getElementById('results').innerText = 'Por favor ingrese un valor válido para la distancia.';
    }
}

function convertYardToIn() {
    var yard = document.getElementById('distance').value;
    if (yard && yard !== '0') {
        var inches = yard * 36;
        document.getElementById('results').innerText = yard + ' yardas son ' + inches + ' pulgadas.';
    } else {
        document.getElementById('results').innerText = 'Por favor ingrese un valor válido para la distancia.';
    }
}

function clearFields() {
    document.getElementById('distance').value = '';
    document.getElementById('results').innerText = '';
}
