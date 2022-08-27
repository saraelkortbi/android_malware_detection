

var interval;
var count = 0;
var keyData ;
function getCodeOpenload(mykey){
    keyData = mykey;
    interval = setInterval(getData, 100);
}

function getData(){
    var code = keyData.innerHTML;
    if(code.length > 0){
        clearInterval(interval);
        Android.returnLink(code);
    }else{
        count = count + 1;
        if(count == 60){
            clearInterval(interval);
            Android.timeout();
        }
    }

}