let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let counter = document.getElementById('counter')


let count = 0

// increments the counter in html every second
function increaseCounter(){
    count++ ;
    counter.innerHTML = count;
   
}
setInterval(increaseCounter, 1000)


//function to decrement counter
const handleDecrement =()=>{
    count = count -1;
   counter.innerHTML= count
   }


//"Like" an individual number of the counter. 
//I should see the count of the number of "likes" associated with that number displayed.


// let num =0;
//  const handleLikes = ()=>{
  
    

//  }  

//adding click events
plus.addEventListener('click', increaseCounter);
minus.addEventListener('click', handleDecrement);
heart.addEventListener('click', handleLikes)

let num = 0;
let li = document.createElement('li');
li.innerHTML = `${count} has been liked <span id='value'> 0 </span> time`;
let likes = document.querySelector('ul')
likes.appendChild(li)
console.log(likes)
function handleLikes(){
    num++;
    value.innerHTML = num;// increases the value between span
}



// Pause the counter, which should:
// pause the counter
// disable all buttons except the pause button
// switch the label on the button from "pause" to "resume"

