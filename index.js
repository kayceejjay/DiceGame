/*
dice[0] = dot1 | top1
dice[1] = dot2 | top2
dice[2] = dot3 | top3
dice[3] = dot4 | mid1
dice[4] = dot5 | mid2
dice[5] = dot6 | mid3
dice[6] = dot7 | bot1
dice[7] = dot8 | bot2
dice[8] = dot9 | bot3
*/
//

var playerOne = document.getElementById("player-dice-face-1");
var playerTwo = document.getElementById("player-dice-face-2");

var dice = playerOne;
console.log(dice);

function dotOn(element) { element.style.visibility = "visible";
}//dotOn

function dotOff(element) { element.style.visibility = "hidden";
}//dotOff

function rollOne(dice) {
    var dotsToPointTo = dice.querySelectorAll("div[class*='dot']"), i;
    for ( i=0; i < dotsToPointTo.length; i++ ) {
        var dotSpace = dotsToPointTo[i];

        if  ( i === 0 ) {
            dotOn(dotSpace);
        } else {                            dotOff(dotSpace);
        }//if
    }//for
}//rollOne

function rollTwo(dice) {
        var dotsToPointTo = dice.querySelectorAll("div[class*='dot']"), i;
    for ( i = 0; i < dotsToPointTo.length; i++ ) {
        var dotSpace = dotsToPointTo[i];
        if ( i === 0 ) { dotOn(dotSpace); }
        else if ( i === 8 ) { dotOn(dotSpace); }
        else { dotOff(dotSpace); }
    }//for
}//rollTwo

function rollThree(dice) {
        var dotsToPointTo = dice.querySelectorAll("div[class*='dot']"), i;
    for ( i = 0; i < dotsToPointTo.length; i++ ) {
        var dotSpace = dotsToPointTo[i];
        console.log(dotSpace);
        if ( i === 0 ) { dotOn(dotSpace);          }
        else if ( i === 4 ) { dotOn(dotSpace); }
        else if ( i === 8 ) { dotOn(dotSpace); }
        else {
            dotOff(dotSpace);
        }//if
    }//for
    console.log(dotSpace);
}//rollThree

function rollFour(dice) {
        var dotsToPointTo = dice.querySelectorAll("div[class*='dot']"), i;
    for ( i = 0; i < dotsToPointTo.length; i++ ) {
        var dotSpace = dotsToPointTo[i];
        console.log(dotSpace);
        if ( i === 0 ) { dotOn(dotSpace); }
        else if ( i === 2 ) { dotOn(dotSpace); }
        else if ( i === 6 ) { dotOn(dotSpace); }
        else if ( i === 8 ) { dotOn(dotSpace); }
        else {
            dotOff(dotSpace);
        }//if
    }//for
    console.log(dotSpace);
}//rollFour

function rollFour(dice) {
        var dotsToPointTo = dice.querySelectorAll("div[class*='dot']"), i;
    for ( i = 0; i < dotsToPointTo.length; i++ ) {
        var dotSpace = dotsToPointTo[i];
        console.log(dotSpace);
        if ( i === 0 ) { dotOn(dotSpace); }
        else if ( i === 2 ) { dotOn(dotSpace); }
        else if ( i === 6 ) { dotOn(dotSpace); }
        else if ( i === 8 ) { dotOn(dotSpace); }
        else {
            dotOff(dotSpace);
        }//if
    }//for
    console.log(dotSpace);
}//rollFour

function rollFive(dice) {
        var dotsToPointTo = dice.querySelectorAll("div[class*='dot']"), i;
    for ( i = 0; i < dotsToPointTo.length; i++ ) {
        var dotSpace = dotsToPointTo[i];
        console.log(dotSpace);
        if ( i === 0 ) { dotOn(dotSpace); }
        else if ( i === 2 ) { dotOn(dotSpace); }
        else if ( i=== 4 ) { dotOn(dotSpace); }
        else if ( i === 6 ) { dotOn(dotSpace); }
        else if ( i === 8 ) { dotOn(dotSpace); }
        else {
            dotOff(dotSpace);
        }//if
    }//for
    console.log(dotSpace);
}//rollFive

function rollSix(dice) {
        var dotsToPointTo = dice.querySelectorAll("div[class*='dot']"), i;
    for ( i = 0; i < dotsToPointTo.length; i++ ) {
        var dotSpace = dotsToPointTo[i];
        console.log(dotSpace);
        if ( i === 0 ) { dotOn(dotSpace); }
        else if ( i === 2 ) { dotOn(dotSpace); }
        else if ( i === 3 ) { dotOn(dotSpace); }
        else if ( i === 5 ) { dotOn(dotSpace); }
        else if ( i === 6 ) { dotOn(dotSpace); }
        else if ( i === 8 ) { dotOn(dotSpace); }
        else {
            dotOff(dotSpace);
        }//if
    }//for
    console.log(dotSpace);
}//rollSix


//rollOne(dice);
//rollTwo(dice);
//rollThree(dice);
//rollFour(dice);
//rollFive(dice);
rollSix(dice);
