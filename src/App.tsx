import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(null);

  console.log(users);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <>
      <section>
        <h1>User searcher</h1>
      </section>
      <section>user input with search btn </section>
    </>
  );
}

export default App;
