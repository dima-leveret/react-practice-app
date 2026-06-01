import { useState, useEffect } from "react";
import { type User } from "../types";

export const useUserSearch = <T>(query: string) => {
  const [data, setData] = useState<Array<T>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          const searchedUsers = data.users.map((user: User) => {
            return {
              id: user.id,
              firstName: user.firstName,
              email: user.email,
            };
          });
          console.log(searchedUsers);
          setData(searchedUsers);
        }, 500);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("Something went wrong!");
        console.log(error);
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [query, error]);

  return { data, isLoading, error };
};
