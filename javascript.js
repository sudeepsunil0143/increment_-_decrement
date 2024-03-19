
let count = 0;

let counting = document.getElementById('counting');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');

increment.addEventListener('click', () =>{
    count++
    counting.textContent = count
})

decrement.addEventListener('click', () =>{
    if(count > 0)
    count--
    counting.textContent = count
})