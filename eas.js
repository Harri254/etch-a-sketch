let container = document.querySelector('.container');
let btn = document.createElement('button');
btn.textContent = 'Add Square';
btn.style.display = 'block';
btn.style.width = 'fit-content';
btn.style.height = 'fit-content';
btn.style.marginInline ='auto';
btn.style.marginBottom = '10px';
btn.style.padding = '8px';
btn.style.paddingInline = '24px';
btn.style.fontSize = '18px';
btn.style.borderRadius = '16px'
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

function rgb() {
    let r = Math.floor(Math.random() * 256 );
    let g = Math.floor(Math.random() * 256 );
    let b= Math.floor(Math.random() * 256 );
    console.log(r,g,b)
    return `rgb(${r},${g},${b})`;
}
 
function newGrid(size = 16) {
    container.textContent = '';
    const divSize = container.clientWidth / size - 4;

    for(let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.width = `${divSize}px`;
        div.style.height = `${divSize}px`;
        div.style.backgroundColor = rgb();
        container.appendChild(div);
    }
}

newGrid();




