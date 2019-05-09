import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <h4 className="left">Book Search</h4>
        <p className="left">Book</p>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Movie"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;

