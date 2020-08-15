//Генарация массива случайных волшебников

const similarWizardsNumber = 5;

var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardsSunames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго',  'Ирвинг' ];
var wizardsCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardsEyes = ['black', 'red', 'blue', 'yellow', 'green' ];

var wizards = [];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

var generateWizard = function(namesArr, surnamesArr, coatsArr, eyesArr){

    var wizardName = namesArr[getRandomInt(namesArr.length)] ;
    var wizardSurname = surnamesArr[getRandomInt(surnamesArr.length)];
    var wizardCoat = coatsArr[getRandomInt(coatsArr.length)];
    var wizardEyes = eyesArr[getRandomInt(eyesArr.length)];


    return { name: wizardName , surname: wizardSurname, coatColor: wizardCoat , eyesColor: wizardEyes }
}

for(var i = 0; i < similarWizardsNumber; i++){
    wizard = generateWizard(wizardsNames, wizardsSunames, wizardsCoats, wizardsEyes );

    wizards.push(wizard);
}

// Создание списка Похожих волшебников на странице

var userDialog = document.querySelector('.setup');
document.querySelector('.setup-similar').classList.remove('hidden')
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


for(var i = 0; i < similarWizardsNumber; i++){
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill: ' + wizards[i].coatColor);
    //wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill:');
    wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: ' + wizards[i].eyesColor);
    //wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: blue');
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' +  wizards[i].surname;
    

    similarListElement.appendChild(wizardElement);
}

//ПОЛЬЗОВАТЕЛЬСКОЕ ВЗАИМОДЕЙСТВИЕ С ОКНОМ НАСТРОЕК

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open-icon')
var setupClose = document.querySelector('.setup-close')
var userNameInput = document.querySelector('.setup-user-name');

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

var openSetup = function(){
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
}

var closeSetup = function(){
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
}

var onSetupEscPress = function(evt){
    if(evt.keyCode === ESC_KEYCODE ){
        closeSetup();
    }
}

setupOpen.addEventListener('click', function(){
    openSetup();
})
setupClose.addEventListener('click', function(){
    closeSetup();
})
setupOpen.addEventListener('keydown', function(evt){
    if(evt.keyCode === ENTER_KEYCODE){
        openSetup();
    }
})
setupClose.addEventListener('keydown', function(evt){
    if(evt.keyCode === ENTER_KEYCODE){
        closeSetup();
    }
})

userNameInput.addEventListener('invalid', function(evt){
    if(userNameInput.valueMissing){
        userNameInput.setCustomValidity('У каждого уважающего себя волшебника должно быть имя');
    }else if(userNameInput.validity.tooShort){
        userNameInput.setCustomValidity('Имя волшебника должно быть длиннее чем 3 символа');
    } else if(userNameInput.validity.tooLong){
        userNameInput.setCustomValidity('Слишком длинное имя для волшебника');
    } 
})