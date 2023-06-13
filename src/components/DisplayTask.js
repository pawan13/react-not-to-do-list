import React from 'react'

const DisplayTask = ({taskList, handleOnDelete, switchTask }) => {
    const entryArray = taskList.filter((task) => task.type === "entry");

  return (
    <table className="table table-striped table-hover border">
                    <tbody id="entry">
                    {entryArray.map((item, i) => (
          <tr>
       <td>{i + 1}</td> 
        <td>{item.task}</td>
    <td>{item.hr}</td>
      <td>
          <button className="btn btn-sm btn-danger"
           onClick={()=> handleOnDelete(item.id)}
        >
              <i className="fa-solid fa-trash">
                
             </i>
          </button>
          <button className="btn btn-sm btn-success"
           onClick={()=>switchTask(item.id, 'bad')}
           >
          <i className="fa-solid fa-arrow-right"></i>
           </button>
       </td>
      </tr>
))}
                </tbody>
                  </table>
   
  )
}

export default DisplayTask
