// Your code here

function saturdayFun (activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (toDo='go to the office'){
    return  `This Monday, I will ${toDo}.`
}

// function wrapAdjective(string) {
//      const egoBoost = function (string) {`You are ${special}!`}
//    }

function wrapAdjective(string='*'){
    return function egoBoost(prompt='special'){
        return `You are ${string}${prompt}${string}!`
    }
}



// function outer(greeting, msg="It's a fine day to learn") { // 2
//     const innerFunction =  function(name, lang="Python") { // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     }
//     return innerFunction("student", "JavaScript"); // 5
//   }

// function saturdayFun (activity){
//     let whatsFun
//     if (activity == null){
//         whatsFun = "This Saturday, I want to roller-skate!"
//     } else  {
//         whatsFun = `This Saturday, I want to ${activity}!`
//     }
//     return whatsFun
// }

// function mondayWork (toDo){
//     let monday
//     if (toDo == null){
//         monday = `This Monday, I will go to the office.`
//     } else  {
//         monday = `This Monday, I will ${toDo}.`
//     }
//     return monday
// }