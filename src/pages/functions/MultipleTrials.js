const multipleIndvTrials = (func, trials) => {
    var win = 0;

    //find avg of the trials
    for(var i = 0; i < trials; i++) 
        win += func();

    return win / trials;
}

export const multipleMultipleTrials = (func, indvTrials, trialsTrials, intervals) => {
    const numIntervals = parseInt(100/intervals);
    var intervalVals = Array(numIntervals + 1).fill(0);

    //do the function above multiple times to find the avg of the avg
    for(var i = 0; i < trialsTrials; i++){
        const result = multipleIndvTrials(func, indvTrials);
        const index = parseInt(result * 100 / intervals);

        intervalVals[index] = intervalVals[index] + 1;
    }

    return intervalVals;
}