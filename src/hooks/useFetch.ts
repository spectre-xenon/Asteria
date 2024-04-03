import { useEffect, useState } from "react";

type error = unknown | null;

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<error>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error: Status ${response.status}`);
        }

        const data: T = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error } satisfies {
    data: T | undefined;
    isLoading: boolean;
    error: error;
  };
};

export { useFetch };
