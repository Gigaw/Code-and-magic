//Генарация массива случайных волшебников
(function(){
    const similarWizardsNumber = 4;

    var wizardsNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var wizardsSunames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var wizardsCoats = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var wizardsEyes = ['black', 'red', 'blue', 'yellow', 'green'];

    var userDialog = document.querySelector('.setup');
    document.querySelector('.setup-similar').classList.remove('hidden')
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    var wizards = [];

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    //Генерация волшебника
    var generateWizard = function (namesArr, surnamesArr, coatsArr, eyesArr) {

        var wizardName = namesArr[getRandomInt(namesArr.length)];
        var wizardSurname = surnamesArr[getRandomInt(surnamesArr.length)];
        var wizardCoat = coatsArr[getRandomInt(coatsArr.length)];
        var wizardEyes = eyesArr[getRandomInt(eyesArr.length)];

        return { name: wizardName, surname: wizardSurname, coatColor: wizardCoat, eyesColor: wizardEyes }
    }

    //Объединение волшебников в массив
    for (var i = 0; i < similarWizardsNumber; i++) {
        wizard = generateWizard(wizardsNames, wizardsSunames, wizardsCoats, wizardsEyes);

        wizards.push(wizard);
    }

    // Отображение волшебников на странице
    for (var i = 0; i < similarWizardsNumber; i++) {
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill: ' + wizards[i].coatColor);
        //wizardElement.querySelector('.wizard-coat').setAttribute('style', 'fill:');
        wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: ' + wizards[i].eyesColor);
        //wizardElement.querySelector('.wizard-eyes').setAttribute('style', 'fill: blue');
        wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name + ' ' + wizards[i].surname;

        similarListElement.appendChild(wizardElement);
    }

    window.similarWizards = {
        wizardsNames : ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
        wizardsSunames : ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
        wizardsCoats : ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        wizardsEyes : ['black', 'red', 'blue', 'yellow', 'green'],
    };
}());
