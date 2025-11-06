const addButton = document.querySelector('.add');
const list = document.querySelector('.items');
const filterButtons = document.querySelectorAll('.filter');
const inputElement = document.getElementById('item-input');

addButton.addEventListener('click', handleAdd);

function handleAdd() {
    const input = inputElement.value.trim();

    if (input) {
        const listItem = document.createElement('li');
        listItem.className = 'item';

        const itemText = document.createElement('span');
        itemText.textContent = input;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        const chkBox = document.createElement('input');
        chkBox.type = 'checkbox';

        listItem.appendChild(chkBox);
        listItem.appendChild(itemText);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);

        inputElement.value = '';
    }
}

filterButtons.forEach(button => {
    button.addEventListener('click', handleFilter);
});

function handleFilter(event) {
    const filter = event.target.getAttribute('data-filter');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if(filter === 'all') {
        Array.from(list.children).forEach(item => {
            item.style.display = 'flex';
        });
    }
     else if(filter === 'completed') {
        Array.from(list.children).forEach(item => {
            const chkBox = item.querySelector('input[type="checkbox"]');
            item.style.display = chkBox.checked ? 'flex' : 'none';
        });
    }
    else if(filter === 'active') {
        Array.from(list.children).forEach(item => {
            const chkBox = item.querySelector('input[type="checkbox"]');
            item.style.display = !chkBox.checked ? 'flex' : 'none';
        });
        
    }

}