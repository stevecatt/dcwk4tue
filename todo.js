let addTask = document.getElementById("addTask")
let toDoItemBox = document.getElementById("toDoItemBox")


addTask.addEventListener('click',function(){console.log('clicked'),console.log(toDoItemBox.value)

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

document.body.appendChild(childDiv)
childDiv.appendChild(newCheck)
childDiv.appendChild(newtaskAdd)
childDiv.appendChild(newButton)
newCheck.addEventListener('change',function(){
   //clone the parent to move it 
      let clone = newtaskAdd.parentElement
      console.log(clone)
      let doneList = document.getElementById("doneList")
      doneList.appendChild(clone)
      
      
    })
 

}
)

