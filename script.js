// Приложение выводит список контактов красиво по нажатию кнопки, можно скрыть назад
var Contact = /** @class */ (function () {
    function Contact(name, post, phone, email, school, departament) {
        this.name = name;
        this.post = post;
        this.phone = phone;
        this.email = email;
        this.school = school;
        this.departament = departament;
    }
    return Contact;
}());
function readLine() {
}
var c = new Contact('', '', '', '', '', '');
document.body.style.backgroundColor = 'whitesmoke';
var content = document.getElementById('content');
content.textContent = 'TEST OF RED';
content.style.backgroundColor = 'red';
//# sourceMappingURL=script.js.map