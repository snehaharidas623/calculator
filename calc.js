function display(num){
  result.value+=num
}


function allclear(){
  result.value=''
}

function evaluateexp(){
    currentExp=result.value
    eval(currentExp)
    result.value=eval(currentExp)
    //result.value=eval(result.value)  single step
}

function backspace(){
    result.value=result.value.slice(0,-1)
    
}