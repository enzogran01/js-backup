function Calculadora() {
    this.display = document.querySelector(".display")
    this.inicia = () => {
        clickBotoes();
        pressionaEnter();
    }
    const pressionaEnter = () => {
        this.display.addEventListener("keyup", e => {
            if (e.keyCode === 13) {
                realizaConta();
            }
        })
    }
    const clickBotoes = () => {
        document.addEventListener("click", e => {
            const el = e.target
            if (el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')) {
                clearDisplay();
            }
            if (el.classList.contains('btn-del')) {
                apagaUm();
            }
            if (el.classList.contains('btn-eq')) {
                realizaConta();
            }
        })
    }
    const btnParaDisplay = (valor) => {
        this.display.value += valor;
        this.display.focus();
    }
    const clearDisplay = () => {
        this.display.value = '';
    }
    const apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    }
    const realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta) {
                alert("Conta inválida")
                return
            }

            this.display.value = String(conta)
        } catch(err) {
            alert("Conta inválida")
            return
        }
    }
}

const c1 = new Calculadora();
c1.inicia();