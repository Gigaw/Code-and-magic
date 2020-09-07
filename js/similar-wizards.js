//Создание списка похожих волшебников на странице
(function(){
    document.querySelector('.setup-similar').classList.remove('hidden')
    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    var renderWizard = function(wizard){// Функция создания похожего волшебника
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

        return wizardElement;
    };

    var makeWizards = function(wizards){ //Отображение волшебников на странице
        var fragment = document.createDocumentFragment();

        for(var i = 0; i < 4; i++){ //  Создания списка волшебников
            var wizard = renderWizard(wizards[i]);
            fragment.appendChild(wizard);
        }
    
        similarListElement.appendChild(fragment);// Помещение списка волшебников на страницу
    };

    window.backend.load(makeWizards, window.backend.onError);
    
    window.similarWizards = {
        wizardsNames : ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
        wizardsSunames : ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
        wizardsCoats : ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        wizardsEyes : ['black', 'red', 'blue', 'yellow', 'green'],
    };
}());
