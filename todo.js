let addTask = document.getElementById("addTask")
let toDoItemBox = document.getElementById("toDoItemBox")
let pending = document.getElementById("pending")
let doneList = document.getElementById("doneList")

addTask.addEventListener('click',function(){console.log('clicked'),console.log(toDoItemBox.value)

let childDiv = document.createElement('div')
childDiv.className="new"

let newtask=toDoItemBox.value
let newCheck= document.createElement("input")
let newtaskAdd = document.createElement("span")
let newButton= document.createElement("button")
//newButton.addEventListener('click',function() {console.log('clicked the individual ') })
newButton.addEventListener('click',function() {this.parentElement.parentElement.removeChild(this.parentElement)})
newtaskAdd.className = "lists"
newtaskAdd.innerHTML=newtask
newButton.innerHTML= "Remove"
newButton.className= "remove-button"
newCheck.type = "checkbox"
//newCheck.addEventListener('change',function(){console.log(this.parentElement)})
newCheck.addEventListener('change',function() {
//console.log(newCheck.checked)
let check = newCheck.checked
if (check == true){
let clone = newtaskAdd.parentElement
      //console.log(clone)
      
      doneList.appendChild(clone)
   }

 else if (check == false){
 let clone = newtaskAdd.parentElement
       //console.log(clone)
       
       pending.appendChild(clone)}})
   

document.body.appendChild(pending)
document.body.appendChild(childDiv)
childDiv.appendChild(newCheck)
childDiv.appendChild(newtaskAdd)
childDiv.appendChild(newButton)
pending.appendChild(childDiv)

      
      
    
 

}
)

