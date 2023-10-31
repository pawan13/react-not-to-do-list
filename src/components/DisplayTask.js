import React from "react";
import { useSelector } from "react-redux";

const DisplayTask = ({ handleOnDelete, switchTask }) => {
  const { taskList } = useSelector((state) => state.taskList);
  const entryArray = taskList.filter((task) => task.type === "entry");

  return (
    <table className="table table-striped table-hover border">
      <tbody id="entry">
        {taskList.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.task}</td>
            <td>{item.hr}</td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleOnDelete(item.id)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
              <button
                className="btn btn-sm btn-success"
                onClick={() => switchTask(item.id, "bad")}
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTask;
