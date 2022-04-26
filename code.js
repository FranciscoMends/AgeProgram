function Enter(){
    var date = new Date()
    var ano = date.getFullYear()
    var box = window.document.getElementById('txtyear')
    var num = Number(box.value)
    var res = window.document.querySelector('div#res')
    
    if (num == 0 || num > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sex = window.document.getElementsByName('sex')
        var idade = ano - num 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >= 1 && idade < 4){
                //bebe
                img.setAttribute('src', 'foto-bebe-H.png')
            }else if (idade >= 4 && idade <15){
                //criança
                img.setAttribute('src', 'foto-criança_H.png')
            }else if (idade >= 15 && idade <21){
                //adolescente
                img.setAttribute('src', 'foto-adolescente_H.png')
            }else if (idade >= 21 && idade <51){
                //adulto
                img.setAttribute('src', 'foto-adulto_H.png')
            }else if (idade >= 51 && idade <100){
                //idoso
                img.setAttribute('src', 'foto-idoso_H.png')
            }else{
                //morte
                img.setAttribute('src', 'foto-morte.png')
            }                
        }else{
            genero = 'Mulher'
            if (idade >= 0 && idade < 4){
                //bebe
                img.setAttribute('src', 'foto-bebe_M.png')
            }else if (idade >= 4 && idade <15){
                //criança
                img.setAttribute('src', 'foto-criança_M.png')
            }else if (idade >= 15 && idade <21){
                //adolescente
                img.setAttribute('src', 'foto-adolescente_M.png')
            }else if (idade >= 21 && idade <51){
                //adulto
                img.setAttribute('src', 'foto-adulto_M.png')
            }else if (idade >= 51 && idade <100){
                //idoso
                img.setAttribute('src', 'foto-idoso_M.png')
            }else{
                //morte
                img.setAttribute('src', 'foto-morte.png')
            }  
        }
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }   

}