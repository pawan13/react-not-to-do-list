import axios from "axios";
import { useSelector } from "react-redux";
import { URL } from "./constant";
import { useState } from "react";

const PostAxios = () => {
  const { taskList } = useSelector((state) => state.taskList);

  const [data, setData] = useState([]);

  // const data = [...taskList];

  // axios
  //   .patch("http://localhost:3009/api/v1/task", ...data)
  //   .then((res) => {
  //     console.log("Data sent ", res.data);
  //   })
  //   .catch((e) => {
  //     console.log("error", e);
  //   });

  const niraj = axios
    .get(URL)
    .then((res) => {
      const taskData = res.data;

      setData(taskData);
    })
    .catch((e) => console.log(e));

  console.log(data);
};

export default PostAxios;
