var question = document.getElementById("question_p");
var answer_1 = document.getElementById("answer_1");
var answer_2 = document.getElementById("answer_2");
var answer_3 = document.getElementById("answer_3");
var select = document.getElementById("select_id");
var $mselect = $('select');
var progress = 0;
var missed = 0;
var score = 0;
var confirm_text = document.getElementById("confirm_text");
$mselect.material_select();

function wrong_color(){
    confirm_text.style.backgroundColor = "#ff0000";
}
function right_color(){
    confirm_text.style.backgroundColor = "#66ff66"
}

function myFunction() {
    if(progress == 0 && select.value == 2) {
        progress++;
        question.textContent = "The heart (and brains) of the computer is the...";
        answer_1.textContent = "RAM";
        answer_2.textContent = "Motherboard";
        answer_3.textContent = "CPU";
        $mselect.material_select();
        confirm_text.textContent = "Good Job!";
        right_color();
        return;
    }else{
        if(progress == 0){
            missed++;
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(progress == 1 && select.value == 3) {
        progress++;
        question.textContent = "RAM stand for:";
        answer_1.textContent = "Really Awesome Monkeys";
        answer_2.textContent = "Random Access Memory";
        answer_3.textContent = "Raspberry And Mayonaise";
        $mselect.material_select();
        confirm_text.textContent = "Amazing";
        right_color();
        return;
    }else{
        if(progress == 1){
            missed++;
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(progress == 2 && select.value == 2) {
        progress++;
        question.textContent = "When you save a file, it is permanently saved on the...";
        answer_1.textContent = "Hard drive";
        answer_2.textContent = "Monitor";
        answer_3.textContent = "RAM";
        $mselect.material_select();
        confirm_text.textContent = "Insane!!!";
        right_color();
        return;
    }
    else{
        if(progress == 2 ){
            missed++;
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(progress == 3 && select.value== 1) {
        progress++;
        question.textContent = "Select three input devices your computer uses:";
        answer_1.textContent = "Mouse, keyboard, monitor";
        answer_2.textContent = "Mouse, scanner, printer";
        answer_3.textContent = "Mouse, keyboard, scanner";
        $mselect.material_select();
        confirm_text.textContent = "Crazy Skills!";
        right_color();
        return;
    }else{
        if(progress == 3){
            missed++;
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(progress == 4 && select.value == 3){
        score = progress - missed;
        confirm_text.textContent = "Great Job! Your score is " + score + "/4";
        right_color();
        return;
    }else{
        if(progress == 4){
            missed++;
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
}


