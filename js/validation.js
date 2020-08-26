//Валидация формы
(function(){
    var userNameInput = document.querySelector('.setup-user-name');

    userNameInput.addEventListener('invalid', function (evt) {
        if (userNameInput.valueMissing) {
            userNameInput.setCustomValidity('У каждого уважающего себя волшебника должно быть имя');
        } else if (userNameInput.validity.tooShort) {
            userNameInput.setCustomValidity('Имя волшебника должно быть длиннее чем 3 символа');
        } else if (userNameInput.validity.tooLong) {
            userNameInput.setCustomValidity('Слишком длинное имя для волшебника');
        }
    })
}())
