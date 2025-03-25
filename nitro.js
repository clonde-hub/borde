let input = document.getElementById('input');
let msg = document.getElementById('msg');
let addTodo = document.getElementById('addTodo');
let display = document.getElementById('display');
let clickme = document.getElementById('Clickme');

addTodo.style.cursor = 'pointer';



addTodo.addEventListener('click', (e) => {
    e.preventDefault();


    let list;
    let child1;
    let child2;
    let editBtn;
    let deleteBtn;

    if (input.value === '' || input.value === null) {
        input.style.border = 'solid 2px red';
        msg.innerHTML = 'Please enter a ToDo';

        setTimeout(() => {
            msg.innerHTML = '';
        }, 3000);

    } else {
        input.style.border = 'solid 1px green';

        list = document.createElement('li');

        child1 = document.createElement('div');

        child2 = document.createElement('div');


        editBtn = document.createElement('button');
        editBtn.innerHTML = 'Edit';
        editBtn.style.color = 'white';
        editBtn.style.backgroundColor = 'goldenrod';
        editBtn.style.borderRadius = '6px';
        editBtn.style.border = 'goldenrod';
        
        

        deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.style.color = 'white';
        deleteBtn.style.backgroundColor = 'darkred';
        deleteBtn.style.borderRadius = '6px';
        deleteBtn.style.border = 'darkred';
        



        list.appendChild(child1);

        let txtcolors = ['purple', 'darkkhaki', 'tomato', 'turquoise', 'cornflowerblue','dark'];
        list.appendChild(child2);

        child1.innerHTML = input.value;
        child1.style.color = txtcolors[Math.floor(Math.random() * txtcolors.length)];
        child1.style.fontStyle = 'italic';
        child1.setAttribute('spellcheck', 'false');

        input.value = '';


        list.style.display = 'flex';
        list.style.justifyContent = 'space-between';

        display.appendChild(list);


        child2.appendChild(editBtn);
        child2.appendChild(deleteBtn);
        


        editBtn.style.cursor = 'pointer';
        editBtn.style.marginRight = '5px';

        deleteBtn.style.cursor = 'pointer';

        editBtn.addEventListener('click', function () 
        {
            child1.setAttribute('contentedictable','true');
        });

        deleteBtn.addEventListener('click', function
            () {
            display.removeChild(list)
        });
    };
});
