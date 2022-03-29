//Your Code here
let firstAnswer  = window.prompt('Do you head left or right?')
console.log(firstAnswer);
if(firstAnswer.toLowerCase() === 'left'){
    let secondAnswer = window.prompt(`left text here`)
    console.log(secondAnswer)
    if (secondAnswer.toLowerCase() === 'follow') {
        let thirdAnswer = window.prompt(`follow text here`)
        console.log(thirdAnswer)
        if (thirdAnswer.toLowerCase() === 'stay') {
            alert('stay text here');
        }
        else {  // spread the word
            alert('spread text here')
        }
    }
    else {  // secondAnswer = continue
        let thirdAnswer = window.prompt(`continue text goes here`);
        console.log(thirdAnswer)
        if(thirdAnswer.toLowerCase() === 'ladder') {
            alert("ladder text here");
        }
        else {  // thirdAnswer was staircase
            alert("staircase text here");
        }
    }

} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`right text here`)
    console.log(secondAnswer)
    if(secondAnswer.toLocaleLowerCase() === 'past') {
        let thirdAnswer = window.prompt(`past text goes here`);
        console.log(thirdAnswer)
        if(thirdAnswer.toLocaleLowerCase() === 'stay') {
            alert('stay text');
        }
        else {  // thirdAnswer = run
            alert('run text');
        }
    }
    else {  // secondAnswer = away
        let thirdAnswer = window.prompt(`away text goes here`);
        console.log(thirdAnswer)
        if(thirdAnswer.toLocaleLowerCase() === 'draw') {
            alert("Draw Text");
        }
        else {  // thirdAnswer = pick
            alert("pick text");
        }
    }
}
