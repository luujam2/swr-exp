import useSWR from "swr";
import axios from "axios";
import { useState, useEffect } from "react";

const axiosFetcher = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/todos/1");
  return res.data.title;
};

const vanillaFetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();

  return json.title;
};

// export const useTest = () => {
//   const { data } = useSWR("abc", vanillaFetcher);

//   return data;
// };

export const useTest = (id) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await axiosFetcher();

      setResult(data);
    }

    fetchData();
  }, []);

  return result;
};
