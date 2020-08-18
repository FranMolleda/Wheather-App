import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
function App() {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [query, setQuery] = useState(false);

  const { city, country } = search;

  useEffect(() => {
    if (query) {
      console.log(city, country);
    }
    setQuery(false);
  }, [query]);

  console.log(search);
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
