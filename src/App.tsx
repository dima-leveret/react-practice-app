import "./App.css";
// import { useFetch } from "./hooks/fetch";
import { useUserSearch } from "./hooks/user";
import { type User } from "./types";
import { useState } from "react";
import { UsersList } from "./components/usersList";

function App() {
  const [inputValue, setInputValue] = useState("");

  // const url = "https://dummyjson.com/users";
  // const { data, isLoading, error } = useFetch<User>(url);

  const { data, isLoading, error } = useUserSearch<User[]>(inputValue);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    console.log(e.target.value);

    setInputValue(e.target.value);
  };

  return (
    <>
      <h1>User searcher</h1>
      <section>
        <label htmlFor="search" className="searchLabel">
          Search Users
          <input
            type="text"
            id="search"
            name="search"
            onChange={(e) => handleInputChange(e)}
          />
        </label>
      </section>
      <section>
        <UsersList data={data} isLoading={isLoading} error={error} />
      </section>
    </>
  );
}

export default App;
