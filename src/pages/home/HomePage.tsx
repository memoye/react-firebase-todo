import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  DocumentData,
  collection,
  // getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { AuthContext } from "../../providers/auth";

export const HomePage = () => {
  const [todos, setTodos] = useState<DocumentData[] | null>(null);
  const { user } = useContext(AuthContext);
  /*
  async function getTodos() {
    //get todos collection
    const todosCol = collection(db, "todos");

    // get snapshot of todos collection
    const todoSnapshot = await getDocs(todosCol);

    //store in todoList Array
    const todoList = todoSnapshot.docs.map((doc) => doc.data());
    setTodos(todoList);
  }
  */

  // const q = query(collection(db, "todos"), where("state", "==", "CA"));
  const q = query(collection(db, "todos"), where("userId", "==", user?.uid));

  useEffect(() => {
    // getTodos();

    const unsub = onSnapshot(q, (querySnapshot) => {
      const todos: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        todos.push(doc.data());
      });

      setTodos(todos);
    });

    return unsub;
  }, []);

  const todoItems = todos?.map((todo: DocumentData) => (
    <span key={todo.title}>{todo.title}</span>
  ));

  return (
    <div className="homePage">
      <div>{todoItems}</div>
    </div>
  );
};
