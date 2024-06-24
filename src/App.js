import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./Components/Card-lis-comp/CardList.Comp";
import SearchInput from "./Components/Input-comp/SerachInput.Comp";

const App = () => {
  const [teachers, setTeachers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((users) => setTeachers(users));
  }, []);

  useEffect(() => {
    const newFilteredTeachers = teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredTeachers(newFilteredTeachers);
  }, [searchValue, teachers]);

  const onSearchChange = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  return (
    <div>
      <h1 className="appTitle">Teachers</h1>
      <SearchInput
        onSearchChange={onSearchChange}
        placeholder="Search Teachers"
        className="SearchBox"
      />
      <CardList teachers={filteredTeachers} />
    </div>
  );
};

export default App;
