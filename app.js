var min = 0;
var sec = 0;
var msec = 0;

afterMin = document.getElementById('min');
afterSec = document.getElementById('sec');
afterMsec = document.getElementById('msec');

var count = 0;
var interval;
var resultArr = [];

function timer(){
    msec++;
    if(msec < 10){
        msec = "0"+msec;
    }
    afterMsec.innerHTML = msec;
    if(msec >= 100){
        msec = 0;
        sec++;
            if(sec<10){
                sec = "0"+sec;
            }
        afterSec.innerHTML = sec;
    }

    else if(sec >= 60){
        sec = 0;
        min++;
        if(min<10){
            min = "0"+min;
        }
        afterMin.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer,10);
    var start = document.getElementById("start");
    start.disabled = true;
}

function stop(){
    clearInterval(interval);
    var start = document.getElementById("start");
    start.disabled = false;
    
}

function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    clearInterval(interval);
    afterMin.innerHTML = "00";
    afterMsec.innerHTML = "00";
    afterSec.innerHTML = "00";
    var start = document.getElementById("start");
    start.disabled = false;
}

function save(){
    if(afterMsec.innerHTML == "00")
    {
        alert("No record to save ");
    }

    else{
        if(resultArr.length > 4){
            alert("You can save only 5 records not more");
            var result = afterMin.innerHTML+ "min(s)"+ afterSec.innerHTML+ "sec(s)"+ afterMsec.innerHTML+ "Mili Seconds";
            resultArr.shift();
            resultArr.push(result); 
        }

        else{
            var result = afterMin.innerHTML+ "min(s)"+ afterSec.innerHTML+ "sec(s)"+ afterMsec.innerHTML+ "Mili Seconds";
            resultArr.push(result);
            alert("record saved");
            reset();
        }
    }
}

function view(){
    if(resultArr.length > 0){
        var records = "Save records are : \n";
        var count = 1;
        for(var i=0; i<resultArr.length; i++){
            records += count+ "-" + resultArr[i] + "\n";
            count++;
        }
        alert(records);
    }

    else{
        if(afterMsec.innerHTML = "00"){
            alert("No record found")
        }

        else{
            if(confirm("No record found. Press ok to reset")){
                reset();
            }
        }
    }
}
