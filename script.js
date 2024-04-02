function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {         // se o o value tem um comprimento igual a 0        
        window.alert('Por favor, digite um numero!')
    } else {                             // se nao
        let n = Number(num.value)        // converte para numero a string(numero) digitada na caixa
        let c = 1
        tab.innerHTML = ''               // antes de começar a mostrar tabuada ele limpo a area de tabuada
        while (c <= 10) {                // enquanto o contador for menor ou igual a 10 (pois nesse exercicio a tabuada vai de 1 ate 10)
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
        // item.text que é a parte de dentro de option = 'um numero x outro numero(que vai de 1 a 10) = resultado da multiplicacao'
            item.value = `tab${c}`       // foi criado para identificar por exemplo (1x1)tab1 (1x2)tab2 (1x3)tab3....
        // a linha acima nao faz sentido para o JS, mas em outras linguagens elas fazem o uso para saber qual o item foi selecionado
            tab.appendChild(item)        // adicionar um elemento filho que vai ser o item
            c++
        }
    }
}

// Guanabara faria com for, porem para demonstrar foi feito com while