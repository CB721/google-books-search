import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Find a book"
          id="search"
          autoComplete="off"
        />
        <div>
        </div>
        <br />
        <button onClick={props.handleFormSubmit} className="btn search-btn">
          Search
        </button>
      </div>
    </form >
  );
}

export default SearchForm;
