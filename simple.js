 const newColor = ['rgb(148,49,38)', 'rgb(81,46,95)','rgb(100,30,22)', 'rgb(74,35,90)', 'rgb(21,67,96)','rgb(136,78,160)','rgb(27,79,114)','rgb(66,73,73)','rgb(120,66,18)','rgb(125,102,8)' ]

 const simple = document.getElementById('Simple');
const hex =document.getElementById('hex');
const btn = document.getElementById('btn');
const color = document.getElementById('color');

i=0
btn.addEventListener('click', function(){
   i++ 
       if(i>newColor.length-1){
           i =0
       }
        document.body.style.backgroundColor = newColor[i];
        color.innerHTML=newColor[i]
        color.style.color=newColor[i]
 
    // const index = Math.floor(Math.random() *newColor.length);
    // document.body.style.backgroundColor = newColor[index];
    // color.innerHTML =newColor[index]
})