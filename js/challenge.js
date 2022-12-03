let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let counter = document.getElementById('counter')
let likes = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.getElementById('comment-input');
const submit =document.querySelector('button#submit')
const comments = document.querySelector('.comments')
let count= 0

// increments the counter in html every second
document.addEventListener('DOMContentLoaded',()=>{
    function increaseCounter(){
        // count++;//increments first then returns a new value
        counter.innerHTML = count++;
       
    }
   let interval = setInterval(increaseCounter, 1000);// repeatedly calls a function after 1second in this case
    
    
    //function to decrement counter
    const arrayOfObjects = [];
    const arrayOfNumbers = [];
    const handleLikes = () => {
    for (value of arrayOfObjects) {
        arrayOfNumbers.push(value.number);
        };
    if (arrayOfNumbers.includes(count)) {
    const valueMatch = arrayOfObjects.find((object) => object.number === count);
    valueMatch.likes++;
    const likedElement = document.getElementById(`${count}`);
    likedElement.textContent = `${count} has been clicked ${valueMatch.likes} times.`
    } else {arrayOfObjects.push({number: count, likes: 1});
    const li= document.createElement('li');
    li.setAttribute('id', count);
    li.textContent = `${count} has been clicked 1 times.`
    likes.appendChild(li);
    console.log(li);
    }
    console.log(arrayOfNumbers);
    console.log(arrayOfObjects);
    }
    heart.addEventListener("click",handleLikes);

    //function to pause every button
    let isPaused ;
    pause.addEventListener('click',()=>{
        if(!isPaused){
            clearInterval(interval)
            isPaused = true;
            pause.textContent='resume';

            //Disabling +,- and heart buttons
            let buttons = document.getElementsByTagName('button');
            for(let x=0; x<buttons.length; x++){
                if(buttons[x] === pause){
                    buttons[x].setAttribute('enabled', 'true')
                } else {
                    buttons[x].setAttribute('disabled', 'true')
                } 
            }
        }else if(isPaused){
            interval = setInterval(() => {++counter.textContent}, 1000);
            isPaused = false
            pause.textContent = 'pause';
            // Enable all buttons
            let buttons = document.getElementsByTagName('button');
            for(let i = 0; i<buttons.length; i++){
                buttons[i].removeAttribute('disabled')
            }
        }
        }
    )
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        handleComments();
        form.reset()
        // adding a comment 
        
    })
    
    function handleComments(){
        let p = document.createElement('p');         
            
        //we assign text to the element 
        p.textContent = input.value;            
      
        // we choose a parent element and append p to it
        comments.appendChild(p)
    }

})
