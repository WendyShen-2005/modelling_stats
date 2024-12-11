export const oneMontyTrial = () => {
    const winningDoor = parseInt(Math.random() * 3);
    const initGuess = parseInt(Math.random() * 3);//player's initial guess

    var monty;//monty choose what

    if(initGuess == winningDoor){//if the initial guess is the same as winning door
        monty = parseInt(Math.random() * 2);
        var counter = 0;
        for(var i = 0; i < 3; i++) { //go through each door
            if(i != winningDoor)//check if this door is the winning door
                if(counter == monty){//if this is the door monty wants to choose
                    monty = i;
                    i = 3;
                } else //otherwise look for other door
                    counter++;
        }
    } else//if initial guess is a losing door
        for(var i = 0; i < 3; i++)
            if(winningDoor != i && initGuess != i){//find the door that has not been choosen by winning door or player
                monty = i;
                i = 3;
            }
    
    var finalGuess;

    for(var i = 0; i < 3; i++)
        if(initGuess != i && monty != i){//find the door that has not been choosen by winning door or monty
            finalGuess = i;
            i = 3;
        }
    
    var win = (finalGuess == winningDoor);

    // consoleLogMonty(winningDoor, initGuess, finalGuess, monty, win);

    if(win) return 1;
    return 0;
}

const consoleLogMonty = (winningDoor, initGuess, finalGuess, monty, win) => {

    var initialSetup = "";
    
    for(var i = 0; i < 3; i++){
        initialSetup += "[";
        if(winningDoor == i)
            initialSetup += "win ";
        if(initGuess == i)
            initialSetup += "init";
        if(monty == i)
            initialSetup += "monty"
        initialSetup += "]";
    }

    var finalSetup = "";
    for(var i = 0; i < 3; i++){
        finalSetup += "[";
        if(winningDoor == i)
            finalSetup += "win ";
        if(finalGuess == i)
            finalSetup += "final";
        if(monty == i)
            finalSetup += "monty"
        finalSetup += "]";
    }

    console.log("Initial: " + initialSetup)
    console.log(" Final: " + finalSetup + " Win: " + win);

}