import React, { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const { country, city } = search;

  console.log(search);
  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };
  return (
    <form>
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
    </form>
  );
};

export default Form;
