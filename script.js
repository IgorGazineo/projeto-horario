function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    // bom dia!
    img.src = 'imagens/manha-ed-t.jpg'
    

} else if (hora > 11 && hora < 18){
    img.src = 'imagens/tarde-ed-t.jpg'
    document.body.style.background = '#6E6564'
    // boa tarde!
} else {
    img.src = 'imagens/noite-ed-t.jpg'
    document.body.style.background = '#1B3C49'
    // boa noite!
}
}