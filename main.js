const simple = document.getElementById('Simple');
const hex =document.getElementById('hex');
const btn = document.getElementById('btn');
const color = document.getElementById('color');
 const colors =[1,2,3,4,5,6, 'A','B','C','D'];


btn.addEventListener('click', function(e){
   
    let hash = '#';

   for(let i = 0; i<6; i++){
     const index =Math.floor(Math.random()* colors.length);
     const colour = colors[index]
     hash+=colour
     document.body.style.backgroundColor =hash;
     color.style.color = hash
     color.innerHTML =hash
     
    }

})

