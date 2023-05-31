import React from "react"

const Table = ({displayTask, displayBadTask}) => {

  return (
    <div className="row mt-5">
    <div className="col-md">
        <h3>Task Entry List</h3>
        <hr/>
        <table className="table table-striped table-hover border">
            <tbody id="entry">
              {displayTask()}
              
            </tbody>
          </table>
    </div>
    <div className="col-md">
        <h3>Bad List</h3>
        <hr/>
        <table className="table table-striped table-hover border">
            <tbody id="bad">
              {displayBadTask()}
            </tbody>
          </table>
    </div> 
  </div>
  )
}

export default Table
