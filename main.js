//表示するspanタグのid
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let comma = document.getElementById('comma');

//格桁のカウント
let hourCun = 0;
let minutesCun = 0;
let secondsCun = 0;
let commaCun = 0;

//タイマーid
let timerid = 0;
    
   
function clickStart() {//スタートボタン


    function start() {
        
        commaCun++;
        
        if(commaCun == 10){//０.１秒カウント
            
            secondsCun++;
            
            if(secondsCun  == 60){//秒カウント
                
                minutesCun++;
                
               if(minutesCun == 60){//分カウント
               
                    hourCun++;
                    hour.innerHTML = hourCun;
                    minutesCun = 0;
                    
                }
                minutes.innerHTML = minutesCun;
                secondsCun = 0;
                
            }
            seconds.innerHTML = secondsCun;
            commaCun = 0;
            
        }
        comma.innerHTML = commaCun;
        
    }
    timerid = setInterval(start,100);//0.1秒ずつ処理
    
}


function clickStop() {//ストップボタン
    clearInterval(timerid);
}


function clickReset() {//リセットボタン
    hourCun = 0;//カウントリセット
    minutesCun = 0;
    secondsCun = 0;
    commaCun = 0;
    
    hour.innerHTML = hourCun;//0表示
    minutes.innerHTML = minutesCun;
    seconds.innerHTML = secondsCun;
    comma.innerHTML = commaCun;
}

//ボタン制御
$(document).ready(function(){
    
   $(".start").click(function() {//スタート押したら
     $(".start").addClass("addNone");
     $(".stop").removeClass("addNone");
     $(".reset").addClass("addNone");
   });
   
   $(".stop").click(function() {//ストップ押したら
     $(".start").removeClass("addNone");
     $(".stop").addClass("addNone");
     $(".reset").removeClass("addNone");
   });
   
   $(".reset").click(function() {//ストップ押したら
     $(".start").removeClass("addNone");
     $(".stop").addClass("addNone");
     $(".reset").addClass("addNone");
   });

});

