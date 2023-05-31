import React, { useState } from 'react'
import Table from './Table'
import Hours from './Hours'

const Form = () => {
    let [taskList, setTaskList] = useState([""])
    
    const hoursPerWeek = 24*7
    const handleOnSubmit =(e)=>{
        e.preventDefault()
        const newTask = new FormData(e.target)
        const task = newTask.get("task")
        const hr = newTask.get("hr")
        const obj = {
            id: randomStr(),
            task,
            hr,
            type:"entry"
        }
        const ttl = total()

        console.log(ttl)

        if(ttl + +hr > hoursPerWeek){
            return alert("You have exceeded the total hours per week")
        }
        setTaskList([...taskList, obj])
        displayTask()
        displayBadTask()
        total()
    }
    const displayTask = () => {
      let str= ``
      const entryArray = taskList.filter((task)=>
      task.type==="entry"
      )
      entryArray.map((item, i)=>
        str +=`<tr>
      <td>${i + 1}</td> 
      <td>${item.task}</td>
      <td>${item.hr}</td>
      <td>
  
      <button class="btn btn-sm btn-warning" onClick=${()=>switchTask(`${item.id}`, 'entry')}>
      <i class="fa-solid fa-arrow-left"></i>
  </button>
          <button class="btn btn-sm btn-danger" onClick=${()=>handleOnDelete(`${item.id}`)}>
              <i class="fa-solid fa-trash">
              
              </i>
          </button>
         
      </td>
    </tr>`)
      return str
  }

  const displayBadTask = () => {
      let str = ``
      const entryArray = taskList.filter((task)=>
      task.type==="bad"
      )
      entryArray.map((item, i)=>
          str += `<tr>
      <td>${i + 1}</td> 
      <td>${item.task}</td>
      <td>${item.hr}</td>
      <td>
  
      <button class="btn btn-sm btn-warning" onClick=${()=>handleOnDelete(`${item.id}`)}>
      <i class="fa-solid fa-arrow-left"></i>
  </button>
          <button class="btn btn-sm btn-danger" onClick=${()=>switchTask(`${item.id}`,`bad`)}>
              <i class="fa-solid fa-trash">
              
              </i>
          </button>
         
      </td>
    </tr>`
      )   
  }

  const handleOnDelete = (id)=>{
    if(window.confirm("Are you sure you want to delete")){
    taskList = taskList.filter((item)=> id !== item.id)
    displayTask()
    displayBadTask()
    total()
    }
 }
   
    const randomStr = () =>{
        const charLength = 6
        const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
        let id = ""
        for(let i=0; i< charLength; i++){
            const ranNum = Math.round(Math.random() * (str.length -1))
             id += str[ranNum]
        }
        return id
     }

     const switchTask = (id, type) =>{
      taskList.map((item)=>{
      if (item.id === id){
          item.type = type
      }
      return item;
  })
  displayTask()
  displayBadTask()
  total()
   }

const total =() =>{
        const ttl = taskList.reduce((acc, item) =>
        acc+ +item.hr,0
     )
  
     const badttl = taskList.reduce((acc, item)=>
       item.type === "bad" ? acc + +item.hr : acc, 0
     )

     return ttl
}  

  return (
   <div>
     <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2 mt-5 border  rounded-4 p-3 bg-light shadow-lg">
            <div className="col-md-7">
              <input name="task" type="text" className="form-control" placeholder="Your Task" aria-label="tasks" required/>
            </div>
            <div className="col-md-2">
              <input name="hr" type="number" className="form-control" placeholder="33" aria-label="hours" required/>
            </div>
            <div className="col-md-3 d-grid">
                <button className="btn btn-primary">
                    <i className="fa-solid fa-plus" style={{color: '#fcfcfd'}}></i>
                    Add new Task</button>
            </div>
          </div>
       </form>
       <Table displayTask={displayTask} displayBadTask={displayBadTask} />
       <Hours  />
   </div>
       
  )
}

export default Form
