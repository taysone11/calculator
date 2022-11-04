
const butNull = document.querySelector(".item.null");
butOne = document.querySelector(".item.one");
butTwo = document.querySelector(".item.two");
butThree = document.querySelector(".item.three");
butFour = document.querySelector(".item.four");
butFive = document.querySelector(".item.five");
butSix = document.querySelector(".item.six");
butSeven = document.querySelector(".item.seven");
butEight = document.querySelector(".item.eight");
butNine = document.querySelector(".item.nine");
butDot = document.querySelector(".item.dot")
butSign = document.querySelector(".item.sign");



butReset = document.querySelector(".item.reset");
butPlus = document.querySelector(".item.plus");
butMinus = document.querySelector(".item.minus");
butMult = document.querySelector(".item.multiplication");
butDiv = document.querySelector(".item.division");
butResult = document.querySelector(".item.res")

lineResult = document.getElementById("text result");
lineResult1 = document.querySelector(".text.result")

let value1 = 0;

let action = "";
let isColor = false;

butPlus.addEventListener('click', () => {
    action = "plus";
    value1 = Number(lineResult.innerHTML);
    lineResult.innerHTML = "";
})

butMinus.addEventListener('click', () => {
    action = "minus";
    
    value1 = Number(lineResult.innerHTML);
    

    lineResult.innerHTML = "";
})

butMult.addEventListener('click', () => {
    action = "mult";
    
    value1 = Number(lineResult.innerHTML);
    

    lineResult.innerHTML = "";
})

butDiv.addEventListener('click', () => {
    action = "div";
    
    value1 = Number(lineResult.innerHTML);
   

    lineResult.innerHTML = "";
})



butResult.addEventListener('click', () => {
    switch(action) {
        case "plus":
            if (lineResult.innerHTML != "0") {
                value1 = value1 + Number(lineResult.innerHTML);
                lineResult.innerHTML = +value1.toFixed(4);
                onTextChange()
                
            }   
            break;
        case "minus":
            if (lineResult.innerHTML != "0") {
                value1 = value1 - Number(lineResult.innerHTML);
                lineResult.innerHTML = +value1.toFixed(4);
                onTextChange()
            }
            break;
        case "mult":
            if (lineResult.innerHTML != "0") {
                value1 = value1 * Number(lineResult.innerHTML);
                lineResult.innerHTML = +value1.toFixed(4);
                onTextChange()
            }
            break;
        case "div":
            if (lineResult.innerHTML != "0") {
                value1 = value1 / Number(lineResult.innerHTML);
                lineResult.innerHTML = +value1.toFixed(4);
                onTextChange()
            }
            break;
        
    }

})

function isEmpty() {
    if (lineResult.innerHTML == "0") {
        return true;
    } else {
        return false;
    }
}
{ "AddActionNumber";

butOne.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "1";
    } else {
        lineResult.innerHTML += "1";
    }
    onTextChange()
})

butTwo.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "2";
    } else {
        lineResult.innerHTML += "2";
    }
    onTextChange()
})

butThree.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "3";
    } else {
        lineResult.innerHTML += "3";
    }
    onTextChange()
})
butFour.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "4";
    } else {
        lineResult.innerHTML += "4";
    }
    onTextChange()
})
butFive.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "5";
    } else {
        lineResult.innerHTML += "5";
    }
    onTextChange()
})
butSix.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "6";
    } else {
        lineResult.innerHTML += "6";
    }
    onTextChange()
})
butSeven.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "7";
    } else {
        lineResult.innerHTML += "7";
    }
    onTextChange()
})
butEight.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "8";
    } else {
        lineResult.innerHTML += "8";
    }
    onTextChange()
})
butNine.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "9";
    } else {
        lineResult.innerHTML += "9";
    }
    onTextChange()
})
butNull.addEventListener('click', () => {
    if (isEmpty()) {
        lineResult.innerHTML = "0";
    } else {
        lineResult.innerHTML += "0";
    }
    onTextChange()
})

butDot.addEventListener('click', () => {
    if (lineResult.innerHTML != "") {
        lineResult.innerHTML += ".";
        onTextChange()
    }

})
butSign.addEventListener('click', () => {
    lineResult.innerHTML = "-" + lineResult.innerHTML;
    onTextChange()
})


}


function reset() {
    lineResult.innerHTML = "0";
    value1 = 0;
    onTextChange();
}
butReset.addEventListener('click', () => {
    reset();
})


function onTextChange() {
    let textLength = lineResult.innerHTML.length;
    let fontSize = Math.floor(Math.min(100, (6 / textLength) * 100)); 
    //where 12 - typical font-size, 1000 - typical length
    lineResult.style.fontSize = fontSize + "px";
}

console.log(Math.pow(10,100));