function playDice() {

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


/*rollDice - simulates a role of the dice by using random function to generate a number between 0 & 6 */

    function rollDice(dice) {

        var dice;

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
            } else {                                        dotOff(dotSpace);
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
        else if ( i === 2 ) { dotOn(dotSpace);  }
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


        var diceValue = Math.floor(Math.random() * 6);

        console.log(diceValue);

        switch (diceValue) {
        case 0:
            rollOne(dice);
            return diceValue;
            break;
        case 1:
            rollTwo(dice);
            return diceValue;
            break;
        case 2:
            rollThree(dice);
            return diceValue;
            break;
        case 3:
            rollFour(dice);
            return diceValue;
            break;
        case 4:
            rollFive(dice);
            return diceValue;
            break;
        case 5:
            rollSix(dice);
            return diceValue;
            break;
        default:
            console.log("Oops! Improper roll. Please roll again.");
    }//switch

}//rollDice

    function playerToggle() {

        var playToggle = Math.floor(Math.random() * 1);
        var chanceOne = rollDice(playerOne);
        var chanceTwo = rollDice(playerTwo);

        const messageOne = "Player 1 is the winner.";
        const messageTwo = "Player 2 is the winner.";
        const messageThree = "It's a draw. Go again.";

        if ( playToggle === 0 ) {
            chanceOne;
            chanceTwo;
            if ( chanceOne > chanceTwo ) { document.getElementById("declare").innerHTML= messageOne; }
            else if ( chanceTwo > chanceOne ) { document.getElementById("declare").innerHTML= messageTwo; }
            else { document.getElementById("declare").innerHTML= messageThree; }
        } else {
            chanceTwo;
            chanceOne;
            if ( chanceTwo > chanceOne ) { document.getElementById("declare").innerHTML= messageTwo; } else if ( chanceOne > chanceTwo ) { document.getElementById("declare").innerHTML= messageOne; } else { document.getElementById("declare").innerHTML= messageThree; }
        }
    }//playToggle

    playerToggle();

}//playDice
