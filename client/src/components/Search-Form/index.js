import React from "react";
// import DataListInput from 'react-datalist-input';
// import Dropdown from 'react-bootstrap/Dropdown';

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
          {/* <DataListInput
            className=""
            placeholder={props.placeHolder}
            items={props.placeHolder}
            onSelect={props.onSelect}
          /> */}
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
