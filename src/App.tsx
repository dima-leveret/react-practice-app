import "./App.css";
import { useFetch } from "./hooks/fetch";

function App() {
  const url = "https://dummyjson.com/users";

  type User = {
    id: number;
    firstName: string;
    email: string;
  };

  const { data, isLoading, error } = useFetch<User>(url);

  console.log(isLoading);
  console.log(data);

  return (
    <>
      <section>
        <h1>User searcher</h1>
        {isLoading ?? <p>Loading...</p>}
        {error ?? <p>{error}</p>}
        {data?.map((user: User) => (
          <div className="userContainer" key={user.id}>
            <p>{user.firstName}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
