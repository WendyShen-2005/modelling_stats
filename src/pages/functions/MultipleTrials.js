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
// console.log(trialsTrials * indvTrials)
    //do the function above multiple times to find the avg of the avg
    for(var i = 0; i < trialsTrials; i++){
        const result = multipleIndvTrials(func, indvTrials);
        const index = parseInt(result * 100 / intervals);

        intervalVals[index] = intervalVals[index] + 1;
    }

    // console.log(intervalVals)

    return {vals:intervalVals, max:findMax(intervalVals), total:trialsTrials};
}

export const findMax = (list) => {
    const newList = list.toSorted(function(a, b){return(a - b)});
    // newList = newList.sort();
    console.log(newList)
    return newList[newList.length - 1];
}