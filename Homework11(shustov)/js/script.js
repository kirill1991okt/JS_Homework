let form = new FormMotherFucker();
let table = new TableMotherFucker();

form.init();
table.init();

document.addEventListener('formSubmit', function () {
    table.clearBody();

    if (form.checkInputs()) {
        let numberOfRow = form.inputY.value;
        let numberOfColumn = form.inputX.value;

        table.createRowsAndColumns(numberOfRow, numberOfColumn)

        document.body.appendChild(table.table);

        form.clearInputs();
    } else {
        form.inputError();
    }
});

