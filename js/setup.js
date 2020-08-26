//ПОЛЬЗОВАТЕЛЬСКОЕ ВЗАИМОДЕЙСТВИЕ С ОКНОМ НАСТРОЕК

//Открытие и закрытие окна настроек

(function(){
    window.setup = {
        onEscPress : function (evt) {
            evt.preventDefault();
            if (evt.keyCode === ESC_KEYCODE) {
                closeSetup();
            }
        },
        
        setupWindow: document.querySelector('.setup')
    }
    var setupWindow = window.setup.setupWindow;
    var setupOpen = document.querySelector('.setup-open-icon')
    var setupClose = document.querySelector('.setup-close')


    const ESC_KEYCODE = 27;
    const ENTER_KEYCODE = 13;

    var openSetup = function () {
        setupWindow.classList.remove('hidden');
        document.addEventListener('keydown', onEscPress);
    }

    var closeSetup = function () {
        setupWindow.classList.add('hidden');
        document.removeEventListener('keydown', onEscPress);
        setupWindow.style = ('');
    }

    onEscPress = function (evt) {
        evt.preventDefault();
        if (evt.keyCode === ESC_KEYCODE) {
            closeSetup();
        }
    }

    setupOpen.addEventListener('click', function () {
        openSetup();
    })
    setupClose.addEventListener('click', function () {
        closeSetup();
    })
    setupOpen.addEventListener('keydown', function (evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
            openSetup();
        }
    })
    setupClose.addEventListener('keydown', function (evt) {
        if (evt.keyCode === ENTER_KEYCODE) {
            closeSetup();
        }
    })



}())






