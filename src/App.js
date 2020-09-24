import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  // const [todos, setTodos] = useState(['Host a program', 'Play with dog', 'Watch social demiema']);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log(input);

  useEffect(() => {
    // This code fires when App.js
    //Show from database  (READ)
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map((doc) => doc.data().todo));
        setTodos(snapshot.docs.map((doc) => doc.data().todo));

        // To delete, we must add ID
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  const addTodo = (event) => {
    // console.log("hey i am button");
    event.preventDefault();

    // Write to database (CREATE)
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]); //add input items in li
    setInput("");
  };
  return (
    <div className="App">
      <h1> Let 's build todo </h1>
      <form>
        <FormControl>
          <InputLabel> Enter your Todo </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          color="default"
          onClick={addTodo}
        >
          Add todo
        </Button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
