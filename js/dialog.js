(function () {
    var dialogHandler = document.querySelector('.setup-user-pic + input');
    var setup = window.setup.setupWindow;
    
    dialogHandler.addEventListener('mousedown', function (evt) {
        evt.preventDefault();
        var dragged = false;
        var startCoords = {
            x: evt.clientX ,
            y: evt.clientY
        };

        // var defaultCoords = {
        //     x: evt.clientX ,
        //     y: evt.clientY
        // };

        // window.dialog = {

        // }

        var onMouseMove = function(moveEvt){
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            }
            dragged = true;

            startCoords = {
                x: moveEvt.clientX, 
                y: moveEvt.clientY
            }

            setup.style.top = (setup.offsetTop - shift.y) + 'px';
            setup.style.left = (setup.offsetLeft - shift.x) + 'px';
        }

        var onMouseUp = function(moveEvt){
            moveEvt.preventDefault();

            if(dragged){
                var onClickPreventDefault = function (evt) {
                    evt.preventDefault();
                    dialogHandler.removeEventListener('click', onClickPreventDefault);
                }
            }
            dialogHandler.addEventListener('click', onClickPreventDefault);

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);


    })
}())