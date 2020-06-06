function textSim(){
var textDiv = document.getElementById('text-sim');
var text2Div = document.getElementById('text2-sim');
var profile_img = document.getElementById('profile-img');
var arr = "Muhammad Ahsan";
var i=0;
var x = setInterval(()=>{
    if(i>=arr.length){
        clearInterval(x)
        console.log('cleared')
        text2Div.style.opacity=1;
        profile_img.style.opacity=1;
    }else{
        textDiv.innerHTML+=arr[i]
        i++;
    }
    
},100)

}
textSim()