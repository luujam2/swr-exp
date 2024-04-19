import logo from "./logo.svg";
import "./App.css";
import { useTest } from "./useTest";
import { useState } from "react";

const PageUno = () => {
  const data = useTest();

  return <h1>PAGE UNO {data}</h1>;
};

const PageDos = () => {
  const data = useTest();

  return <h1>PAGE DOS {data}</h1>;
};

const PageTres = () => {
  const data = useTest();

  return <h1>PAGE TRES {data}</h1>;
};

function App() {
  const [page, setPage] = useState(0);

  return (
    <div className="App">
      {page === 0 && <PageUno />}
      {page === 1 && <PageDos />}
      {page === 2 && <PageTres />}

      <button onClick={() => setPage((page + 1) % 3)}>click</button>
    </div>
  );
}

export default App;
