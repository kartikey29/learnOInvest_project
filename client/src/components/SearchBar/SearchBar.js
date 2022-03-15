import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./search.module.css";
import api from "../../config/api";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      query,
    };
    api
      .post("/search", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.formdiv}>
      <form onSubmit={submitHandler}>
        <input
          className={classes.input}
          placeholder="Search"
          type="text"
          label="search"
          value={query}
          onChange={inputHandler}
        ></input>
        <Button
          className={classes.submit}
          as="input"
          type="submit"
          value="Submit"
        />{" "}
      </form>
    </div>
  );
};

export default SearchBar;