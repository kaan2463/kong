chrome.runtime.onMessage.addListener(function(request) {

    //todo kaan: will be placed at a better place!
    
    if(window.location.hostname !== 'github.com'){
        alert("You must be at page where days grid is!!\n ex: github.com/kaan2463");
        return;
    }

    if(request.action === 'display') {
        display(request.message);
    }else if(request.action === 'clear'){ 
        clear();
    }
});

var charSet="ABCDEFGHIJKLMNOPRSTUVYZ";

var timeInt;

function display(msg){

    var days=document.querySelectorAll('g rect');
    if(days.length < 360){
        alert("You must be at page where days grid is!!\n ex: github.com/kaan2463");
        return;
    }

    clear();
    var msg_str=""+msg;
   
    var LETTER_W=5;
    var LETTER_H=7;
    var LETTER_SPACE=1;
    var TEXT_SPACE=8;
    var shift=0;
    var index=0;
    var FREQUENCY=msg_str.length*(LETTER_W+LETTER_SPACE);
    var msg_length = FREQUENCY + TEXT_SPACE;
    
    timeInt = setInterval(function(){
        
        if(shift == msg_length){
            shift = 0;
        }

        for(var i=0;i<days.length;i++){
            days[i].setAttribute("data-level",0);
        }

        for(var i=1 ;i<52;i++){
            index = (shift+i) % msg_length;
            if(index+1>FREQUENCY){
                continue;
            }
            //space character
            if(msg_str.charAt(index/(LETTER_W+LETTER_SPACE))==" "){
                for(var j=0;j<LETTER_H;j++){
                    document.querySelectorAll('g g')[i].getElementsByTagName('rect')[j].setAttribute("data-level",0);
                }
                continue;
            }
            //UNKNOWN CHAR
            if(!charSet.includes(msg_str.charAt(index/(LETTER_W+LETTER_SPACE)))){
                for(var j=0;j<LETTER_H;j++){
                    if(this["letter_UKNOWN"][j][index%(LETTER_W+LETTER_SPACE)]){
                        document.querySelectorAll('g g')[i].getElementsByTagName('rect')[j].setAttribute("data-level",3);
                    }
                }
                continue;
            }
            for(var j=0;j<LETTER_H;j++){
                if(this["letter_"+msg_str.charAt(index/(LETTER_W+LETTER_SPACE))][j][index%(LETTER_W+LETTER_SPACE)]){
                    document.querySelectorAll('g g')[i].getElementsByTagName('rect')[j].setAttribute("data-level",3);
                }
            }
        }
        shift++;
    },200);

}

function clear(){
    if(timeInt != undefined){
        clearInterval(timeInt);
    }
    var days=document.querySelectorAll('g rect');
    for(var i=0;i<365;i++){
        days[i].setAttribute("data-level",0);
    }
}

var letter_UKNOWN =[
    [1,1,1,1,1],
    [1,0,1,0,1],
    [1,1,1,0,1],
    [1,0,1,0,1],
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,1,1,1,1]
];



var letter_A =[
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,1,0,1,0],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
];

var letter_B =[
    [0,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,0]
];

var letter_C =[
    [0,0,0,0,0],
    [0,1,1,1,1],
    [1,1,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [0,1,1,1,1]
];

var letter_D =[
    [0,0,0,0,0],
    [1,1,1,1,0],
    [1,0,0,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,1,1],
    [1,1,1,1,0]
];

var letter_E =[
    [0,0,0,0,0],
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1]
];

var letter_F =[
    [0,0,0,0,0],
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,1,1,1,1],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
];

var letter_G =[
    [0,0,0,0,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,0],
    [1,0,1,1,0],
    [1,0,0,0,1],
    [0,1,1,1,0]
];

var letter_H =[
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,1,1,1,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
];

var letter_I =[
    [0,0,0,0,0],
    [0,1,1,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,1,1,0]
];

var letter_J =[
    [0,0,0,0,0],
    [0,0,1,1,1],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,0,0,1,0],
    [0,1,0,1,0],
    [0,0,1,0,0]
];

var letter_K =[
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,0,1,0],
    [1,1,1,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0],
    [1,0,0,0,1]
];

var letter_L =[
    [0,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,1,1,1,1]
];

var letter_M =[
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,1,0,1,1],
    [1,0,1,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1]
];

var letter_N =[
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,1,0,0,1],
    [1,0,1,0,1],
    [1,0,1,0,1],
    [1,0,0,1,1],
    [1,0,0,0,1]
];

var letter_O =[
    [0,0,0,0,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
];

var letter_P =[
    [0,0,0,0,0],
    [1,1,1,0,0],
    [1,0,0,1,0],
    [1,1,1,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0],
    [1,0,0,0,0]
];

var letter_R =[
    [0,0,0,0,0],
    [1,1,1,0,0],
    [1,0,0,1,0],
    [1,1,1,0,0],
    [1,1,0,0,0],
    [1,0,1,0,0],
    [1,0,0,1,0]
];

var letter_S =[
    [0,0,0,0,0],
    [0,1,1,1,0],
    [1,0,0,0,1],
    [0,1,1,0,0],
    [0,0,0,1,0],
    [1,0,0,0,1],
    [0,1,1,1,0]
];

var letter_T =[
    [0,0,0,0,0],
    [1,1,1,1,1],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
];

var letter_U =[
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,1,1,0]
];

var letter_V =[
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,1,0,1,0],
    [0,0,1,0,0]
];

var letter_Y =[
    [0,0,0,0,0],
    [1,0,0,0,1],
    [0,1,0,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0]
];

var letter_Z =[
    [0,0,0,0,0],
    [1,1,1,1,1],
    [0,0,0,1,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,1,0,0,0],
    [1,1,1,1,1]
];

