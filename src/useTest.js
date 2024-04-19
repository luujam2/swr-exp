import useSWR from "swr";
import axios from "axios";

const axiosFetcher = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/todos/1");
  return res.data.title;
};

const vanillaFetcher = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();

  return json.title;
};

export const useTest = () => {
  const { data, error, isLoading } = useSWR("abc", vanillaFetcher);

  return data;
};
