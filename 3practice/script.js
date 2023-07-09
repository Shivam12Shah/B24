
var width =0 ;

setInterval(function(){
    width+=2

        
        if(width>=101){
            clearInterval();
        }else{
            document.querySelector("#inner").style.width = `${width}%` ;
        }

    
},500)