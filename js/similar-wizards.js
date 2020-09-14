//Создание списка похожих волшебников на странице
(function(){

    var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

    var playerWizard = document.querySelector('.setup-player');
    var playerCoat = playerWizard.querySelector('.wizard-coat');
    var playerEyes = playerWizard.querySelector('.wizard-eyes');
    var playerFireball = playerWizard.querySelector('.setup-fireball-wrap');

    var currentCoatColor =  coatColors[0];
    var currentEyeColor = eyesColors[0] ;
    var currentFireballColor  =  fireballColors[0]

    var wizards = [];

    var onCoatClick = function(){
        var startColor = coatColors.shift();
        coatColors.push(startColor);
        playerCoat.setAttribute('style', 'fill: ' + coatColors[0]);
        currentCoatColor = coatColors[0];
        // updateWizards();
        updateWizardDebounced();
    }

    var onEyesClick = function(){
        var startColor = eyesColors.shift();
        eyesColors.push(startColor);
        playerEyes.setAttribute('style', 'fill: ' + eyesColors[0]);
        currentEyeColor = eyesColors[0];
        // updateWizards();
        updateWizardDebounced();
    }

    var onFireballClick =  function(){
        var startColor = fireballColors.shift();
        fireballColors.push(startColor);
        playerFireball.setAttribute('style', 'background: ' + fireballColors[0]);
        currentFireballColor = fireballColors[0];
        // updateWizards();
        updateWizardDebounced();
    }

    playerCoat.addEventListener('click', onCoatClick);
    playerEyes.addEventListener('click', onEyesClick);
    playerFireball.addEventListener('click',onFireballClick );


    var updateWizards = function(){
        window.render(wizards.sort(rankComparator));
    }

    var updateWizardDebounced = window.debounce(updateWizards);

    var successHandler = function(data){
        wizards = data;
        window.render(wizards);
    }

    var getRank = function(wizard){
        var rank = 0;
        if(wizard.colorCoat === currentCoatColor){
            rank += 2;
        }
        if(wizard.colorEyes === currentEyeColor){
            rank += 1;
        }
        if(wizard.colorFireball === currentFireballColor){
            rank += 1;
        }

        return rank;
    }

    var namesComparator = function(leftName, rightName){
        if(leftName > rightName){
            return 1;
        } else if(leftName < rightName){
            return -1;
        } else {
            return 0;
        }
    }

    var rankComparator = function(left, right){
        var rankDiff = getRank(right) - getRank(left);
        return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
    }





    window.backend.load(successHandler, window.backend.onError);



}());
