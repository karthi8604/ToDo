var items = [];


var inp = document.querySelector("#inp");
var btn = document.querySelector("button");

btn.addEventListener('click',onPress);

document.addEventListener('keydown',function(element){
    if(element.key === "Enter") onPress();
});

function onPress(){
    if(inp.value != ''){
        items.push(inp.value);
        addToList(inp.value);
        inp.value = ''; 
        inp.focus();
    }
}

function addToList(item){
    var list = document.createElement('p');
    var chkBox = document.createElement('input');
    chkBox.setAttribute("type","checkbox");
    list.textContent = item;
    list.prepend(chkBox);
    document.querySelector(".items").appendChild(list);
    chkBox.addEventListener('click',function() {
        list.remove();
    });
}   
