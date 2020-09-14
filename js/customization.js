// Кастомизация волшебника;
(function(){
    var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];



    var playerWizard = document.querySelector('.setup-player');
    var playerCoat = playerWizard.querySelector('.wizard-coat');
    var playerEyes = playerWizard.querySelector('.wizard-eyes');
    var playerFireball = playerWizard.querySelector('.setup-fireball-wrap');

    Array.prototype.rand = function() {
        return this[Math.floor(Math.random() * this.length)];
    }    

    window.customization = function (colors, element) {
        var startColor = colors.shift();
        colors.push(startColor);

        if(element.nodeName == 'DIV'){
            element.setAttribute('style', 'background: ' + colors[0]);
        } else{
            element.setAttribute('style', 'fill: ' + colors[0]);
        }

        window.similarWizards.updateWizards();
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

