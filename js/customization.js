// Кастомизация волшебника;
(function(){
    var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    var playerWizard = document.querySelector('.setup-player');
    var playerCoat = playerWizard.querySelector('.wizard-coat');
    var playerEyes = playerWizard.querySelector('.wizard-eyes');
    var playerFireball = playerWizard.querySelector('.setup-fireball-wrap');

    var coatColors = window.similarWizards.wizardsCoats;
    var eyesColors = window.similarWizards.wizardsEyes;

    window.customization = function (colors, element) {
        var startColor = colors.shift();
        colors.push(startColor);

        // console.log(element.nodeName);
        if(element.nodeName == 'DIV'){
            element.setAttribute('style', 'background: ' + colors[0]);
        } else{
            element.setAttribute('style', 'fill: ' + colors[0]);
        }
    }
    
    playerCoat.addEventListener('click', function () {
        customization(coatColors, playerCoat);
    });
    playerEyes.addEventListener('click', function() {
        customization(eyesColors, playerEyes); 
    });
    playerFireball.addEventListener('click', function() {
        customization(fireballColors, playerFireball);
    });

}())

