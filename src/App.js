import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import DisplayTask from './components/DisplayTask';
import DisplayBadTask from './components/DisplayBadTask';


function App() {
  const [task, setTask] = useState('')
  const [hr, setHr] = useState('')
  let [taskList, setTaskList]= useState([])
  const hoursPerWeek = 24*7

  const handleOnChangeTask = (e) =>{
    const {value} = e.target;
    setTask(value)
  }

  const handleOnChangeHr = (e) =>{
    const {value} = e.target;
    setHr(value)
  }
  const handleOnSubmit = (e) =>{
    e.preventDefault()
  
    const obj = {
        id: randomStr(),
         task,
     hr,
     type: "entry"
    
    }
   setTaskList([...taskList, obj])
  
     const ttl = total()
     console.log(ttl)

    if (ttl + +hr > hoursPerWeek){
        return alert("You have exceeded the total hours per week")
    }
}

const handleOnDelete = (id) => {
  if (window.confirm("Are you sure you want to delete?")) {
     setTaskList(taskList.filter((item) => id !== item.id));
  }
}

const switchTask = (id, type) =>{
  const updatedTaskList = taskList.map((item)=>{
  if (item.id === id){
      item.type = type
  }
  return item;
})
setTaskList(updatedTaskList)
}

// const displayBadTask = () => {
//   const entryArray = taskList.filter((task)=>
//   task.type==="entry"
//   )
//   entryArray.map((item, i)=>
//       <tr>
//   <td>${i + 1}</td> 
//   <td>${item.task}</td>
//   <td>${item.hr}</td>
//   <td>
      
//       <button className="btn btn-sm btn-success"
//       onClick={switchTask(item.id, 'entry')}>
//           <i className="fa-solid fa-arrow-left"></i>
//       </button>

//       <button className="btn btn-sm btn-danger"
//       onClick={handleOnDelete(item.id)}>
//           <i className="fa-solid fa-trash">
//           </i>
//       </button>
//   </td>
// </tr>
//   )

  
// }
  
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
 



const total =() =>{
    const ttl = taskList.reduce((acc, item) =>
    acc+ +item.hr,0
 )
 return ttl
}
const badttl = taskList.reduce((acc, item)=>
   item.type === "bad" ? acc + +item.hr : acc, 0
 )


  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title  --> */}
       <Title/>
        {/* <!-- form area  --> */}
       <Form handleOnChangeTask={handleOnChangeTask} handleOnChangeHr={handleOnChangeHr} handleOnSubmit={handleOnSubmit}/>
          {/* <!-- table area  --> */}
          <div className="row mt-5">
            <div className="col-md">
                <h3>Task Entry List</h3>
                <hr/>

                <DisplayTask taskList={taskList} 
                 handleOnDelete={handleOnDelete}
                 switchTask={switchTask}
                />
                
            </div>
            <div className="col-md">
                <h3>Bad List</h3>
                <hr/>
                    <DisplayBadTask taskList={taskList}
                    handleOnDelete={handleOnDelete}
                    switchTask={switchTask}/>
                  <p>You could have saved = <span id="badTotal">{badttl}</span> hr</p>
                  {/* <!-- total hours  --> */}
                  <div>
                    Total hour per week allocated = <span id="total"> {total()}</span>hr
                  </div>
            </div> 
          </div>   
    </div>
      </div>
  );
}

export default App;
