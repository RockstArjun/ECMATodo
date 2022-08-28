import React, { useState } from "react";
import "./ECMATodo.style.css";
import axios from "axios";
import { useEffect } from "react";

export default function ECMATodo() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getURL = "http://localhost:8000/api/findECMATodo";
    axios.get(getURL).then(res => {
      setData(res.data);
    });
  }, [count]);

  const addTodo = async e => {
    e.preventDefault();
    let postTodo = {
      title: title,
      description: description,
    };
    const postURL = "http://localhost:8000/api/createECMATodo";
    await axios.post(postURL, postTodo).then(res => {
      if (res.status === 200) {
        setTitle("");
        setDescription("");
        setCount(count + 1);
      }
    });
  };
  const deleteTodo = async e => {
    e.preventDefault();
    const deleteURL = `http://localhost:8000/api/deleteECMATodo/${e.target.value}`;
    await axios.delete(deleteURL);
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <section>
        <form>
          <input
            type="text"
            placeholder="Enter your title"
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            type="text"
            placeholder="Enter your description"
            onChange={e => setDescription(e.target.value)}
            value={description}
          />
          <button type="submit" onClick={addTodo}>
            Add Todo
          </button>
        </form>
        <div className="big-box">
        <div className="box">
                <h1>Welcome!</h1>
                <p>This ECMATodo application is build by Arjun Chauhan using MERN stack.</p>
              </div>
          {data.map(allTodo => {
            return (
              <div className="box">
                <h1>{allTodo.title}</h1>
                <p>{allTodo.description}</p>
                <button type="submit" onClick={deleteTodo} value={allTodo._id}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      
      <div className="info">
        <h1>Design & Developed by </h1><a href="https://arjunchauhan.netlify.app/" target="_blank" rel="noreferrer">Arjun Chauhan</a>
      </div>
      </section>
    </>
  );
}
