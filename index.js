// code your solution here
function saturdayFun(string = `roller-skate`){
    return(`This Saturday, I want to ${string}!`);
}

function mondayWork(activity = `go to the office`){
    return (`This Monday, I will ${activity}.`);
}

// function wrapAdjective(flairString = "*") {
//     return function innerFunction (innerString = `special`){
//         return (`You are ${flairString}${innerString}${flairString}!`);
//     }
// }

function wrapAdjective(flairString = "*") {
    const innerFunction = (innerString = 'special') => {
        return (`You are ${flairString}${innerString}${flairString}!`);
    }
}