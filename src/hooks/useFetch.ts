import { useEffect, useState } from "react";

type state = unknown | null;

const useFetch = (url: string) => {
  const [data, setData] = useState<state>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<state>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP Error: Status ${response.status}`);
        }

        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export { useFetch };
