import React, { useState } from "react";

const Form = ({ search, setSearch, setQuery }) => {
  const [error, setError] = useState(false);

  const { country, city } = search;

  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    setQuery(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <p className="red darken-4 error">Todos los campos son obligatorios </p>
      ) : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          onChange={handleChange}
          value={city}
        />
        <label htmlFor="city">City</label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          onChange={handleChange}
          value={country}
        >
          <option value="">-- Select Country --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="country">Country: </label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="buscar clima"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
};

export default Form;
