import React from 'react'

const DisplayBadTask = ({taskList, handleOnDelete, switchTask}) => {
    const badArray = taskList.filter((task) => task.type === "bad");

    return (
      <table className="table table-striped table-hover border">
                      <tbody id="bad">
                      {badArray.map((item, i) => (
            <tr>
         <td>{i + 1}</td> 
          <td>{item.task}</td>
      <td>{item.hr}</td>
        <td>
            <button className="btn btn-sm btn-success"
             onClick={()=>switchTask(item.id, 'entry')}
             >
            <i className="fa-solid fa-arrow-left"></i>
             </button>
             <button className="btn btn-sm btn-danger"
             onClick={()=> handleOnDelete(item.id)}
          >
                <i className="fa-solid fa-trash">
                  
               </i>
            </button>
         </td>
        </tr>
  ))}
                  </tbody>
                    </table>
     
    )
}

export default DisplayBadTask
