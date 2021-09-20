class FormMotherFucker {

    constructor() {
        this.form = document.createElement('form');
    }

    init() {
        this.inputX = this.createFormElement(
            'input',
            [
                {
                    'name': 'id',
                    'value': 'X'
                },
                {
                    'name': 'type',
                    'value': 'text'
                }
            ]
        );
        this.inputY = this.createFormElement(
            'input',
            [
                {
                    'name': 'id',
                    'value': 'Y'
                },
                {
                    'name': 'type',
                    'value': 'text'
                }
            ]
        );
        this.btn = this.createFormElement(
            'button',
            [
                {
                    'name': 'id',
                    'value': 'btn'
                },
                {
                    'name': 'disabled',
                    'value': 'disabled'
                }
            ],
            'Create'
        );

        this.form.appendChild(this.inputX);
        this.form.appendChild(this.inputY);
        this.form.appendChild(this.btn);

        document.body.appendChild(this.form);

        this.events();
    }

    createFormElement(tagName, attributes = [], innerText = false) {
        let element = document.createElement(tagName);

        if (attributes.length) {
            for (let i = 0; i < attributes.length; i++) {
                element.setAttribute(attributes[i].name, attributes[i].value);
            }
        }

        if (innerText) {
            element.innerText = innerText;
        }

        return element;
    }

    events() {
        this.form.addEventListener('keyup', event => {
            if (this.inputX.value && this.inputY.value) {
                this.btn.removeAttribute('disabled');
            } else {
                this.btn.setAttribute('disabled', 'disabled');
            }
        });

        this.form.addEventListener('submit', function (event) {
            event.preventDefault();

            let newEvent = new Event("formSubmit", {bubbles: true});
            this.dispatchEvent(newEvent);
        });
    }

    checkInputs() {
        this.intInputs();

        if (
            this.inputX.value > 1 &&
            this.inputX.value < 10 &&
            !isNaN(this.inputX.value) &&
            this.inputY.value > 1 &&
            this.inputY.value < 10 &&
            !isNaN(this.inputY.value)
        ) {
            return true;
        }

        return false;
    }

    inputError() {
        alert('Введите корректное целое число: от 1 до 10');
        this.clearInputs();
    }

    intInputs() {
        this.inputX.value = parseInt(this.inputX.value);
        this.inputY.value = parseInt(this.inputY.value);
    }

    clearInputs() {
        this.inputX.value = '';
        this.inputY.value = '';
    }

}