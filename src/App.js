import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";
function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const { city, country } = search;
  const [error, setError] = useState(false);

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

    if (result.cod === "404") {
      setError(true);
    } else {
      setError(false);
    }

    apiQuery();
    //eslint-disable-next-line
  }, [query]);
  let component;
  if (error) {
    component = <Error mensaje="No hay resultados" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title="Clima React app" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className="col m6 s12">{component} </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
