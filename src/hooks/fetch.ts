import { useState, useEffect } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<null | Array<T>>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.users))
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong during fetching!");
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, [url, error]);

  return { data, isLoading, error };
};
