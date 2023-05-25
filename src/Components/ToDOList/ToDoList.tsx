import React from "react";
import { listByFilter } from "../../redux/selectors";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";

const ToDoList: React.FC = () => {
  const tasks = useSelector(listByFilter);

  return (
    <>
      {tasks.map((el) => (
        <ToDoItem task={el} key={el._id} />
      ))}
    </>
  );
};

export default ToDoList;
