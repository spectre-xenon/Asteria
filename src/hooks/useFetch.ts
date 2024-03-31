import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
<<<<<<< HEAD
  const [error, setError] = useState<unknown | null>(null);
=======
  const [error, setError] = useState<unknown | never | null>(null);
>>>>>>> 55edd1e (feat: added useFetch hook)

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
