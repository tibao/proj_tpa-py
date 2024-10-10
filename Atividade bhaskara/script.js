document.getElementById('bhaskaraForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
        alert('Por favor, preencha corretamente os valores de A, B e C (A não pode ser zero).');
        return;
    }

    const delta = (b * b) - (4 * a * c);
    if (delta < 0) {
        alert('Não existem raízes reais.');
        return;
    }

    let x1, x2;
    if (delta === 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = null;
    } else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
    }

    addRow(a, b, c, x1, x2);
});

function addRow(a, b, c, x1, x2) {
    const tableBody = document.querySelector('#resultadoTable tbody');
    const rowCount = tableBody.rows.length;

    const newRow = tableBody.insertRow();
    const cellNum = newRow.insertCell(0);
    const cellA = newRow.insertCell(1);
    const cellB = newRow.insertCell(2);
    const cellC = newRow.insertCell(3);
    const cellX = newRow.insertCell(4);

    cellNum.textContent = rowCount + 1;
    cellA.textContent = a;
    cellB.textContent = b;
    cellC.textContent = c;
    cellX.textContent = `x' = ${x1.toFixed(3)}` + (x2 !== null ? `; x'' = ${x2.toFixed(3)}` : '');
}
