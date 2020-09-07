(function(){
    window.backend = {
        load: function(onLoad, onError){
            var URL = 'https://javascript.pages.academy/code-and-magick/data';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
    
            xhr.addEventListener('load', function(){
                var error ;
                switch (xhr.status){
                    case 200:
                        onLoad(xhr.response);
                        break;
                    case 400:
                        error = 'Невенрный запрос'; 
                        break;
                    case 401:
                        error = 'Пользователь не авторизован';
                        break;
                    case 404: 
                        error = 'Ничего не найдено';
                        break;
                        
                    default: 
                        error = 'Статус ответа : ' + xhr.status + ' ' +xhr.statusText ;
                }
                if(error){
                    onError(error);
                }
            })
            xhr.addEventListener('error', function(){
                onError('Произошла ошибка соединения');
            })
            xhr.addEventListener('timeout', function(){
                onError('Зпрос не успел выполниться за ' + xhr.timeout + 'мс');
            })

            xhr.open('GET', URL);
            xhr.send();
        },
        save: function(data, onSuccess){
            var URL = 'https://javascript.pages.academy/code-and-magick';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
    
            xhr.addEventListener('load', function(){
                onSuccess(xhr.response);
            })
            xhr.open('POST', URL);
            xhr.send(data);
        },
        onError: function(message){
            console.error(message);
            var  node = document.createElement('div');
            node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red';
            node.style.position = 'absolute';
            node.style.left = 0;
            node.style.right = 0;
            node.style.fontSize = '30px';
    
            node.textContent = message;
            document.body.insertAdjacentElement('afterbegin', node);
        }
    };


    
}())