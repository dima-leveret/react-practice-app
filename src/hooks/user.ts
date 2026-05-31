import { useState, useEffect } from "react";

export const useUserSearch = <T>(query: string) => {
  const [data, setData] = useState<null | T>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data.users);
        }, 1000);
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
