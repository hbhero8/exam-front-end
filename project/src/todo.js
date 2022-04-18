import { Button } from "bootstrap";
import {React, useEffect, useState } from "react";
import { Table, Form } from "react-bootstrap";
import axios from "axios";

const fetchHandler = async () => {
  return await axios.get("http://13.251.156.158:3005/api/get")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchHandler().then((res) => setTodos(res.data))
  }, []);
  return (
    <>
      <div className="container">
        <div className="title">
          <h2> My ToDo list</h2>
          <p className="scores">0/6</p>
        </div>

        <div className="todos">
          <Table>
            <thead>
          {todos.map((todo, i) => (
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>{todo.task_name}</th>
                <th>i</th>
                <ul className="icon">
                  <img className="icons" src="/icons/pencil.svg" alt="" />
                  <img className="icons" src="/icons/trash-can.svg" alt="" />
                </ul>
              </tr>
                ))}
            </thead>
          </Table>
          <Form.Control
            className="formcontrol"
            type="text"
            placeholder="What's next?"
          />
        </div>
        <button className="addButton"> Add Book</button>
      </div>
    </>
  );
}
export default Todos;
