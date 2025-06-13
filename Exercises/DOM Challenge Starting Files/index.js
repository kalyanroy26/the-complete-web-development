// get element by tag name
let body = document.getElementsByTagName("body")

//get element by classname
let title = body[0].getElementsByClassName("title")

title[0].innerHTML = "kalyan maharajulu"
// title[0].style.color = "seagreen"

//get element by id using queryselector
let list = body[0].querySelector("#list");

//selecting all items and styling  
let items = document.querySelectorAll(".item")
items.forEach((item)=>{
    item.style.fontStyle = 'italic'
})

// changing style 
list.querySelector("li a").style.color = 'red'

list.style.listStyle = "decimal"

// changing content inside tag
list.lastElementChild.innerHTML = "i'm last child of this list"
list.lastElementChild.style.color = "seagreen"

//creating new element with content,style and adding to dom
let newListItem = document.createElement('li')
newListItem.innerHTML = "now i'm last child"
newListItem.style.color = '#1b64ad'
list.append(newListItem)

// dynamically adding new list element by performing ana click event
let button = document.querySelector('.btn')
button.addEventListener("click",()=>{
    let item = document.createElement('li')
    item.innerHTML = "i'm next"
    list.append(item)
})



// Day - 16

// document.querySelector('.title').classList.add('hide')

// document.querySelector('.title').classList.remove('hide')

// document.querySelector('.title').classList.toggle('hide')

// document.querySelector('.title').classList.toggle('huge')
