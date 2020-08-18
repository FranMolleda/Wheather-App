import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [query, setQuery] = useState(false);

  const [result, setResult] = useState({});
  const { city, country } = search;

  useEffect(() => {
    const apiQuery = async () => {
      if (query) {
        const appId = "858e38f9b915599bbac09d708c049f6a";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
      }
      setQuery(false);
    };
    apiQuery();
  }, [query]);

  return (
    <Fragment>
      <Header title="Clima React app" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
