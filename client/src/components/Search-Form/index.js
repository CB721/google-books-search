import React from "react";
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
          placeholder={props.placeHolder}
          id="search"
          autoComplete="off"
        />
        {/* <Dropdown.Menu show>
          <Dropdown.Item eventKey="1">Looking for {props.placeHolder}?</Dropdown.Item>
        </Dropdown.Menu> */}
        <br />
        <button onClick={props.handleFormSubmit} className="btn search-btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
