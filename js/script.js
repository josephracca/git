// alert('alo!');


let buttons = document.getElementsByClassName("btn");
//will now return a collection of html elements
//run through a loop, add an event listener

let changeMe = document.getElementById("changeMe");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (e) {
        alert('you clicked on' + e.target.innerText);
        // this.remove();

        changingText(e.target.innerText);
    });
}

function changingText(textToChange) {
    //retrieve a variable of text to change
    //switch statements
    //works if you want all the buttons to do a similar task

    changeMe.innerText = textToChange;
    changeMe.classList = "";

    switch (textToChange) {
        case "Primary":
            changeMe.classList.add("blue");
            break;
        case "Secondary":
            changeMe.classList.add("blue");
            break;
        case "Danger":
            changeMe.classList.add("blue");
            break;
        case "Success":
            changeMe.classList.add("blue");
            break;
        case "Warning":
            changeMe.classList.add("blue");
            break;
        default:
            changeMe.classList.add("blue");
    }

}

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function(e){
//         changeMe.innerHTML = e.target.innerHTML;
//         changeMe.className = this.className;
//         });
//     }// end of loop

// text name of the button dictates what is going to happen...