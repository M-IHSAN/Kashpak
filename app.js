function toggleDropdown(){
    console.log('toggle chala')
    var dropdown_div = document.getElementById('dropdown');
    if(dropdown_div.style.height==='100px'){
        dropdown_div.style=`height:0px;opacity:0`
    }
    else{
        dropdown_div.style =`height:100px;opacity:1;`;
 
    }
}
console.log("Hello World")
function toggleDropdown2(){
    console.log('toggle chala 2')
    var dropdown_div = document.getElementById('dropdown2');
    if(dropdown_div.style.height==='100px'){
        dropdown_div.style=`height:0px;opacity:0`
    }
    else{
        dropdown_div.style =`height:100px;opacity:1;`;
    }
}

function toggleOff(){
    console.log('toggle off')
    var dropdown_div = document.getElementsByClassName('contact-dropdown')[0];
    dropdown_div.style="height:0px;opacity:0"
}

// function toggleOff2(){
//     console.log('toggle off2')
//     var dropdown_div = document.getElementsByClassName('contact-dropdown2')[0];
//     dropdown_div.style="height:0px;opacity:0"
// }

function func(){
    console.log('clicked')
}



function showed(event){
    console.log(event,'showed')
}
function show(){
    var div = document.getElementById('content-3')
    console.log(div,'div');
    div.style="opacity:1";
    console.log('show kar bhai')
}