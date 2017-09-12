/**
 * Created by Randika on 9/11/2017.
 */


var Letters=['a','b','c','d','e','f','g','h'];
var numbers=[1,2,3,4,5,6,7,8];

var currentPosition;
var suares;
var chesspieces;

var pondCount;
var countArray=new Array(9);

$(document).ready(function () {
    suares=$('.square');
    chesspieces=$('.chesspieces');
   pondCount=0;
    for(var i=0;i<countArray.length;i++ ){
        countArray[i]=0;
    }

});


$('.chesspieces').on("click",function (evenData) {
    currentPosition = $(this);
    console.log(currentPosition);


    if (!(currentPosition.hasClass('clickpiece')) &&
        currentPosition.hasClass('blackpond')) {
        pondCount = 0;
        pathOfBlackPond(currentPosition);
    }
    if(!(currentPosition.hasClass('clickpiece'))&&
            currentPosition.hasClass('whitepond')){
        pondCount=0;
        pathOfWhitePond(currentPosition);
    }
});



function pathOfBlackPond(evenData) {
    currentPosition=evenData;
    console.log("bhhdsbfssn");
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    var currentId=currentPosition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var  LettersArrayPosition=($.inArray(letter,Letters));
    var numArrayPosition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPosition]+numbers[numArrayPosition+1];
    var x=LettersArrayPosition;

    for(var y=numArrayPosition+1;y<4;y++) {
        tempId = Letters[x] + numbers[y];
        if (!($("#" + tempId).children().hasClass('chesspieces'))) {
            $("#" + tempId).addClass('selectpath');
            currentPosition.addClass('clickpiece');

        }
        else {
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('chesspieces'))){
        $("#"+tempId).addClass('selectpath');
        currentPosition.addClass('clickpiece');
        currentPosition.removeClass('selectpath');

    }
}


function pathOfWhitePond(eventData) {
    currentPosition=eventData;
    suares.removeClass('selectpath');
    chesspieces.removeClass('clickpiece');
    var  currentId=currentPosition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPosition=($.inArray(letter,Letters));
    var numArrayPosition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPosition]+numbers[numArrayPosition-1];
    var tempId2=Letters[LettersArrayPosition]+numbers[numArrayPosition-2];


    switch (currentPosition.attr('id')){
        case "img17" :countArray[0]++; break;
        case "img18" :countArray[1]++; break;
        case "img19" :countArray[2]++; break;
        case "img20" :countArray[3]++; break;
        case "img21" :countArray[4]++; break;
        case "img22" :countArray[5]++; break;
        case "img23" :countArray[6]++; break;
        case "img24" :countArray[7]++; break;
    }

    if (countArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }



    if (countArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }

    if (countArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }


    if (countArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }


    if (countArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }


    if (countArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }


    if (countArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }


    if (countArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }


    if (countArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('chesspices'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

        if (!($("#"+tempId2).children().hasClass('chesspieces'))){
            $("#"+tempId2).addClass('selectpath');
            currentPosition.addClass('clickpiece');
        }

    }else {
        if (!($("#"+tempId1).children().hasClass('chesspieces'))){
            $("#"+tempId1).addClass('selectpath');
            currentPosition.addClass('clickpiece');
            currentPosition.removeClass('selectpath');
        }
    }


}


$(".square").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".chesspieces.clickpiece");
    if ($(currentSquar).hasClass('selectpath')){
        currentSquar.append(currentpiece);
        chesspieces.removeClass('clickpiece')
        suares.removeClass('slectpath');
    }

});



