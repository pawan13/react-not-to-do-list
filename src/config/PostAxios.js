import axios from "axios";
import { useSelector } from "react-redux";

const PostAxios = () => {
  const { taskList } = useSelector((state) => state.taskList);

  axios
    .post(URL, ...taskList)
    .then((res) => {
      console.log("Data sent ", res.data);
    })
    .catch((e) => {
      console.log("error", e);
    });
};

export default PostAxios;
