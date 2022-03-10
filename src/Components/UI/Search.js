import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [inptext, setInptext] = useState("");

  const onChange = (q) => {
    setInptext(q);
    getQuery(q);
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={inptext}
          onChange={(e) => onChange(e.target.value)} 
        />
      </form>
    </section>
  );
};

export default Search;