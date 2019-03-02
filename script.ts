// ѕриложение выводит список контактов красиво по нажатию кнопки, можно скрыть назад



class Contact {
    constructor(
        readonly name: string,
        readonly post: string,
        readonly phone: string,
        readonly email: string,
        readonly school: string,
        readonly departament: string) { }
}

function readLine() {

}


const c = new Contact('', '', '', '', '', '')


document.body.style.backgroundColor = 'whitesmoke'
const content = document.getElementById('content')
content.textContent = 'TEST OF RED'
content.style.backgroundColor = 'red'