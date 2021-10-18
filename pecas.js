let peso = 100
if (peso > 100) {
    
    console.log ("O peso da peça é válido! Cadastramento possível.")
    let listapecas = ["disco de freio", "painel", "suspensão","bateria", "vela", "embreagem", "virabrequim", "correia"]
    if (listapecas.length < 10){

        console.log("O numero limite de peças na lista ainda não foi alcançado!")
        let nomepeca = "pneu"
        if (nomepeca.length > 3){
            console.log("Nome válido, prossiga com o cadastro.")
        }else { console.log("Nome inválido. Deve conter pelo menos 3 caracteres.")}

    }else { console.log("Capacidade máxima de peças na lista atingida!")}
                
}else { console.log("A peça não possui o peso mínimo de 100g para cadastrada.")}