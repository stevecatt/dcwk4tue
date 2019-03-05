let addTask = document.getElementById("addTask")
let toDoItemBox = document.getElementById("toDoItemBox")




addTask.addEventListener('click',function(){console.log('clicked'),console.log(toDoItemBox.value)
let completDiv=document.createElement('div')
completDiv.classList= "done"
let childDiv = document.createElement('div')
childDiv.classList="new"
let newtask=toDoItemBox.value
let newCheck= document.createElement("input")
let newtaskAdd = document.createElement("span")
let newButton= document.createElement("button")
newButton.addEventListener('click',function() {console.log('clicked the individual ') })
newButton.addEventListener('click',function() {this.parentElement.parentElement.removeChild(this.parentElement)})
newtaskAdd.classList = "lists"
newtaskAdd.innerHTML=newtask
newButton.innerHTML= "Remove"
newCheck.type = "checkbox"
newCheck.addEventListener('change',function(){console.log(this.parentElement)})

console.log(newCheck.checked)
document.body.appendChild(completDiv)
document.body.appendChild(childDiv)
childDiv.appendChild(newCheck)
childDiv.appendChild(newtaskAdd)
childDiv.appendChild(newButton)
//not working yet
    if (newCheck.checked =true){
        console.log("cked")
    completDiv.appendChild(newCheck)
    completDiv.appendChild(newtaskAdd)
    completDiv.appendChild(newButton)}


}
)

