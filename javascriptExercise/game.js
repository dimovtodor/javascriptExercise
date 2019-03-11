var curr_score, best_score = 0, lastRoll;
start();

document.getElementById('newGame').addEventListener('click', function () {
    start();
    enable_buttons();
    document.getElementById('roll').style.visibility= 'visible';
    var roll = Math.floor(Math.random()*9)+1;
    document.getElementById('roll').src = roll + '-Number-PNG.png';
    lastRoll = roll;
});

document.getElementById('high').addEventListener('click', function () {
    var roll = Math.floor(Math.random()*9)+1;
    document.getElementById('roll').src = roll + '-Number-PNG.png';
    if(lastRoll < roll){
       curr_score++;
        document.getElementById('curr_score').textContent = curr_score;
    } else {
        //document.getElementById('roll').src = 'game_over.png';
        disable_buttons();
        if(curr_score > best_score){
            best_score = curr_score;
            document.getElementById('best_score').textContent = best_score;
        }
    }
    lastRoll = roll;
});

document.getElementById('low').addEventListener('click', function () {
    var roll = Math.floor(Math.random()*9)+1;
    document.getElementById('roll').src = roll + '-Number-PNG.png';
    if(lastRoll > roll){
        curr_score++;
        document.getElementById('curr_score').textContent = curr_score;
    } else {
        //document.getElementById('roll').src = 'game_over.png';
        disable_buttons();
        if(curr_score > best_score){
            best_score = curr_score;
            document.getElementById('best_score').textContent = best_score;
        }
    }
    lastRoll = roll;
});

function start() {
    curr_score = 0;
    lastRoll = -1;
    document.getElementById('roll').style.visibility= 'hidden';
    document.getElementById('curr_score').textContent = '0';
    //document.getElementById('best_score').textContent = '0';
    disable_buttons();

}

function disable_buttons() {
    document.getElementById('high').disabled = true;
    document.getElementById('low').disabled = true;
}

function enable_buttons() {
    document.getElementById('high').disabled = false;
    document.getElementById('low').disabled = false;
}