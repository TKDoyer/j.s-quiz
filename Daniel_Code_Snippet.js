/* Code Snippet */

let listOfQuestions = document.getElementsByClassName("question")

let displayQuestion = function(displayNum) {
    for (i=0; i < length(listOfQuestions); i++){
        if (i == displayNum) {
            listOfQuestions[i].style.display = 'block'
        }
        else {
            listOfQuestions[i].style.display = 'none'
        }
    }   
}

/* End Code Snippet */

/* While vs. For */

let index = 0
while (index < 10) {
    /* do the thing */
    index = index +1
}

for (let index = 0; index < 10; index++){
    /* do the thing */
}

list = [1,2,3]
for(let index = 0; index < length(list); index++){
    item = list[index];

}

let iterativeFunction = function(item) {
    /* do the thing with item */
}

// Shortcut for above
list.forEach(iterativeFunction)

// Display function example
foobar

/* End of While vs. For */