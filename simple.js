 const newColor = ['#A32143', '#136212','#DA32D6', '#5D6BD5', '#5D6BD5','#256BD3','#3B4B1B','#612D33','#6643563','#D2B2A6' ]

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
        color.innerHTML =newColor[i]
 
    // const index = Math.floor(Math.random() *newColor.length);
    // document.body.style.backgroundColor = newColor[index];
    // color.innerHTML =newColor[index]
})