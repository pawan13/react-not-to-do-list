import React from 'react'

const Form = ({handleOnChangeTask,handleOnChangeHr, handleOnSubmit}) => {
 
  return (
    <>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2 mt-5 border  rounded-4 p-3 bg-light shadow-lg">
            <div className="col-md-7">
              <input name="task" type="text" className="form-control" placeholder="Your Task" aria-label="First name" onChange={handleOnChangeTask} required/>
            </div>
            <div className="col-md-2">
              <input name="hr" type="number" className="form-control" placeholder="33" aria-label="Last name" onChange={handleOnChangeHr} required/>
            </div>
            <div className="col-md-3 d-grid">
                <button className="btn btn-primary">
                    <i className="fa-solid fa-plus" style={{color: '#fcfcfd'}}></i>
                    Add new Task</button>
            </div>
          </div>
       </form>
    </>
  )
}

export default Form
