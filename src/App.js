import "./App.css";
import Movie from "./Movie";
import axios from "axios";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=7507078&s=${input}`
    );
    setData(response.data.Search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  let renderedItems;
  if (data.length > 0) {
    renderedItems = data.map((item) => {
      return <Movie movie={item} />;
    });
  }

  return (
    <div className="container">
      <h1 style={{ fontSize: "2rem" }} className="text-center my-4">
        Movie Search
      </h1>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          className="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <div className="results my-4">{renderedItems}</div>
    </div>
  );
}

export default App;
