//kumpulkan semua ui element
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input")
const filterInput= document.querySelector('#filter-input')
const todoList= document.querySelector("#todo-list")
const clearButton=document.querySelector("#clear-todos")

//ini adalah kumpulan event listener 
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos);
filterInput.addEventListener("keyup", filterTodos);

//ini adalah DOM functions

function addTodo(e){

    e.preventDefault();

    if (todoInput.value){

        //membuat li element 
        const li = document.createElement("li")
         
        //menambahkah class pada elemen li
        li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1"
        
        //menambahkan childern kedalam elemen li
        li.appendChild(document.createTextNode(todoInput.value))
        //membuat delete button
        const a = document.createElement("a")
    
        //memberi properti pada elemen
        a.href="#"
        a.className="badge badge-danger delete-todo"
        a.innerHTML="Delete"
    
        //menyelipkan elemen a pada childern li
        li.appendChild(a)
        todoList.appendChild(li)
        todoInput.value = "";
    }else{
        alert("jangan kosong cok")
    }
    

}

function deleteTodo(e){
    e.preventDefault();

    if(e.target.classList.contains("delete-todo")){
       if (confirm("Apakah yakin akan menghapus?")){

       
        const parent = e.target.parentElement;

        parent.remove();
        
    }
    }


}

function clearTodos(){
    todoList.innerHTML = ""

}

function filterTodos(e){
    const filterText = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll(".todo-item")

    todoItems.forEach((item)=> {
        const itemText = item.firstChild.textContent.toLowerCase();

        if (itemText.indexOf(filterText) !== -1){
            item.setAttribute("style", "display: block;");
        }else{
            item.setAttribute("style", "display: none !important;")

        }
        console.log(itemText)

    })
}
