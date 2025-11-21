
let allClearBtn = document.querySelector("#allClear");
let btnContainer = document.querySelector(".buttons");
let display = document.querySelector("#userInputDisplay");

//On pressing 'AC'
allClearBtn.addEventListener('click', ()=>{
    console.log("AC pressed");
    display.value = "";
});


btnContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === "BUTTON"){
        //if AC pressed
        if(e.target.value==="allClear") return;

        //'del' pressed
        else if(e.target.value==="delete"){
            console.log("'del' pressed");
            display.value = display.value.substring(0, display.value.length-1);
        }

        // '=' pressed
        else if(e.target.value==='='){
            console.log("'=' pressed");
            display.value = eval(display.value);
        }

        //Any other btn pressed
        else{
            try{
                display.value += e.target.value;
            }catch(err){
                alert("Invalid Input!!");
            }
        }
    }
});


