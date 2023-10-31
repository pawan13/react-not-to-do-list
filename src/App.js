import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import DisplayTask from "./components/DisplayTask";
import DisplayBadTask from "./components/DisplayBadTask";
import { useSelector } from "react-redux";
import { setTaskList } from "./components/DisplayTaskSlice";

function App() {
  const { taskList } = useSelector((state) => state.taskList);

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setTaskList(taskList.filter((item) => id !== item.id));
    }
  };

  const switchTask = (id, type) => {
    const updatedTaskList = taskList.map((item) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(updatedTaskList);
  };

  const total = () => {
    const ttl = taskList.reduce((acc, item) => acc + +item.hr, 0);
    return ttl;
  };

  const badttl = taskList.reduce(
    (acc, item) => (item.type === "bad" ? acc + +item.hr : acc),
    0
  );

  return (
    <div className="wrapper">
      <div className="container">
        {/* <!-- top title  --> */}
        <Title />
        {/* <!-- form area  --> */}
        <Form setTaskList={setTaskList} total={total} />
        {/* <!-- table area  --> */}
        <div className="row mt-5">
          <div className="col-md">
            <h3>Task Entry List</h3>
            <hr />

            <DisplayTask
              taskList={taskList}
              handleOnDelete={handleOnDelete}
              switchTask={switchTask}
            />
          </div>
          <div className="col-md">
            <h3>Bad List</h3>
            <hr />
            <DisplayBadTask
              handleOnDelete={handleOnDelete}
              switchTask={switchTask}
            />
            <p>
              You could have saved = <span id="badTotal">{badttl}</span> hr
            </p>
            {/* <!-- total hours  --> */}
            <div>
              Total hour per week allocated = <span id="total"> {total()}</span>
              hr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
