function verificar() {
    var data = new Date()  //Data atual
    var ano = data.getFullYear()  //pega a data com 4 dígitos
    var formAno = document.getElementById('txtano') //data que foi digitada no formulário
    var res = document.getElementById('res')    //id da div

    if (formAno.value.length == 0 || formAno.value > ano)  {  //caixa vazia OU AnoNasc maior que o ano atual
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var  fsex = document.getElementsByName('radsex')
        var idade = ano - formAno.value
        var genero = ''
        var img = document.getElementById("imagem")
        

        if (fsex[0].checked) {
            genero = "Homem"

            if (idade >= 0 && idade < 10){
                //criança
                img.src = "foto_bebe_homem.png"
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.src = "foto_jovem_homem.png"
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.src = "foto_homem_adulto.png"
            } else {
                //idoso
                img.src = "foto_homem_idoso.png"
            }

            
         
        } else if (fsex[1].checked) {
            genero = "Mulher"
        
            if (idade >= 0 && idade < 10){
                //criança
                img.src = "foto_bebe_mulher.png"
            } else if (idade >= 10 && idade < 21) {
                //jovem
                img.src = "foto_jovem_mulher.png"
            } else if (idade >= 21 && idade < 50) {
                //adulto
                img.src = "foto_mulher_adulta.png"
            } else {
                //idoso
                img.src = "foto_mulher_idosa.png"
            }

        }

        res.style.textAlign =  'center'   // centralizar o txt
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(img)   //Adiciona a imagem
       
}
    
}