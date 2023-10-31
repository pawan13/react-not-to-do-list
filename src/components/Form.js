import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTaskList } from "./DisplayTaskSlice";
import { useSelector } from "react-redux";
import PostAxios from "../config/PostAxios";
// import PostAxios from "../config/postAxios";

const Form = ({ total }) => {
  const [task, setTask] = useState("");
  const [hr, setHr] = useState("");
  const hoursPerWeek = 24 * 7;

  const dispatch = useDispatch();
  const { taskList } = useSelector((state) => state.taskList);

  // const data = [...taskList];
  const handleOnChangeHr = (e) => {
    const { value } = e.target;
    setHr(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const obj = {
      id: randomStr(),
      task,
      hr,
      type: "entry",
    };

    dispatch(setTaskList([...taskList, obj]));

    // console.log(data);
    // PostAxios();

    const ttl = total;

    if (ttl + +hr > hoursPerWeek) {
      return alert("You have exceeded the total hours per week");
    }
  };
  const handleOnChangeTask = (e) => {
    const { value } = e.target;
    setTask(value);
  };
  const randomStr = () => {
    const charLength = 6;
    const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let id = "";
    for (let i = 0; i < charLength; i++) {
      const ranNum = Math.round(Math.random() * (str.length - 1));
      id += str[ranNum];
    }
    return id;
  };
  return (
    <>
      <form
        // method='Post'
        onSubmit={handleOnSubmit}
      >
        <div className='row g-2 mt-5 border  rounded-4 p-3 bg-light shadow-lg'>
          <div className='col-md-7'>
            <input
              name='task'
              type='text'
              className='form-control'
              placeholder='Your Task'
              aria-label='First name'
              onChange={handleOnChangeTask}
              required
            />
          </div>
          <div className='col-md-2'>
            <input
              name='hr'
              type='number'
              className='form-control'
              placeholder='33'
              aria-label='Last name'
              onChange={handleOnChangeHr}
              required
            />
          </div>
          <div className='col-md-3 d-grid'>
            <button
              className='btn btn-primary'
              onClick={PostAxios()}
            >
              <i
                className='fa-solid fa-plus'
                style={{ color: "#fcfcfd" }}
              ></i>
              Add new Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
