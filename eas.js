let container = document.querySelector('.container');
let btn = document.createElement('button');
btn.textContent = 'Add New Square';
btn.style.width = 'fit-content';
btn.style.height = 'fit-content';
btn.style.marginBottom = '10px';
btn.style.padding = '16px';
btn.style.fontSize = '24px';
container.before(btn);


btn.addEventListener('click', ()=> {
    let userInput = prompt('Enter the number of squares on each row? E.g. 12');
    let newSize  = Number(userInput);
    console.log(newSize)
    if(newSize <= 0 ) {
        return
    }
    
    if(newSize !== NaN && newSize < 100){
        console.log(newSize)
        newGrid(newSize)
        console.log(newSize)
    }else if( newSize <= 0 || newSize >= 100  ) {
        alert("Enter number less than 100 but greater than 0. Not empty");
        return;
    }else{
        alert("Enter a number not a string or empty space");
    }
})
 
function newGrid(size = 16) {
    container.textContent = '';
    const divSize = container.clientWidth / size - 4;

    for(let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        container.appendChild(div);
    }
}

newGrid();




