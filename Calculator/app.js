let screen = document.getElementById("screen");
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons){
    item.addEventListener('click', (item)=>{
        ButtonText = item.target.innerText;
        // console.log(ButtonText)
        if(ButtonText == 'x'){
            ButtonText = '*'
            screenValue += ButtonText;
            screen.value = screenValue;
        }
        else if(ButtonText == '='){
            screen.value = eval(screenValue);
            screenValue = screen.value;

        }
        else if(ButtonText == 'CE'){
            screenValue = "";
            screen.value = screenValue;
        }
        else{
            screenValue += ButtonText;
            screen.value = screenValue;
        }
    })
}

