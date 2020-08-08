'use strict';


var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 25;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40 ;
var BAR_GAP = 60;

var renderCloud = function(ctx, x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr){
    var maxElement = arr[0];

    for(var i = 0; i < arr.length; i++){
        if (arr[i] > maxElement){
            maxElement = arr[i];
        }
    }

    return maxElement;

}



window.renderStatistics = function(ctx, players, times){ 
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    

    ctx.fillStyle = '#000';
    
    ctx.font= '16px PT Mono';
    ctx.fillText('Ура, вы победили!',CLOUD_X + GAP, CLOUD_Y + GAP  );
    ctx.fillText('Список результатов:',CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
    

    var maxTime = getMaxElement(times);
 
    for(var i = 0; i< players.length; i++){
        // ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP +(GAP + BAR_HEIGHT)*i);
        // ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT)*i, (BAR_WIDTH * times[i]) / maxTime, BAR_HEIGHT );
        // ctx.fillText(players[i],CLOUD_X + 2*GAP + 1.5*BAR_GAP*i, CLOUD_HEIGHT + CLOUD_Y - GAP);
        // ctx.fillRect(CLOUD_X + 2*GAP + 1.5*BAR_GAP*i, CLOUD_HEIGHT + CLOUD_Y - 2*GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / (maxTime * -1) );

        var randomColor = Math.random();

        if(players[i] === 'Вы'){
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
            ctx.fillRect(CLOUD_X + 2*GAP + 1.5*BAR_GAP*i, CLOUD_HEIGHT + CLOUD_Y - 2*GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / (maxTime * -1) );
            ctx.fillStyle = '#000';
            ctx.fillText(players[i],CLOUD_X + 2*GAP + 1.5*BAR_GAP*i, CLOUD_HEIGHT + CLOUD_Y - GAP);
        }else{
            ctx.fillStyle = 'rgba(0, 0, 255,' + randomColor + ')';
            ctx.fillRect(CLOUD_X + 2*GAP + 1.5*BAR_GAP*i, CLOUD_HEIGHT + CLOUD_Y - 2*GAP, BAR_WIDTH, (BAR_HEIGHT * times[i]) / (maxTime * -1) );
            ctx.fillStyle = '#000';
            ctx.fillText(players[i],CLOUD_X + 2*GAP + 1.5*BAR_GAP*i, CLOUD_HEIGHT + CLOUD_Y - GAP);
        }
    }

}