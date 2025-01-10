const toDoForm = document.getElementById('todo-form')
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY = 'todos'
let toDos = []

function saveToDos () {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo (event) {
  const li = event.target.parentElement
  li.remove()
}

function paintToDo (newTodo) {
  const li = document.createElement('li')
  li.id = newTodo.id
  const span = document.createElement('span')
  span.innerText = newTodo.text
  const button = document.createElement('button')
  button.innerText = '❌'
  button.addEventListener('click', deleteToDo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleTodoSubmit (event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ''
  const newTodoOb = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoOb)
  paintToDo(newTodo)
  saveToDos()
}

toDoForm.addEventListener('submit', handleTodoSubmit)

// function sayHello (item) {
//   console.log('this is the turn of', item)
// }

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}
