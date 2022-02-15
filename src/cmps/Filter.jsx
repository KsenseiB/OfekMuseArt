import React from "react";

export default function Filter() {
  return (
    <section class="tag-filter flex">
      <h4>Filter By: </h4>
      <form className="filter-form flex align-center">
        <input type="checkbox" id="fantasy" name="fantasy" value="fantasy" />
        <label htmlFor="fantasy">Fantasy</label>
        <input type="checkbox" id="family" name="family" value="family" />
        <label htmlFor="family">Family</label>
        <input type="checkbox" id="kids" name="kids" value="kids" />
        <label htmlFor="kids">Kids</label>
        <input
          type="checkbox"
          id="backstage"
          name="backstage"
          value="backstage"
        />
        <label htmlFor="backstage">Backstage</label>
        <input type="checkbox" id="canvas" name="canvas" value="canavs" />
        <label htmlFor="canvas">Body Art</label>
      </form>
    </section>
  );
}
