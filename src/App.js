import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }
  console.log(data);

  function searchNameHere(e) {
    let search = e.target.value;
    if (search.length > 0) {
      let nameHere = data.filter((emp, i) => {
        return emp.name.includes(search);
      });
      setData(nameHere);
    } else {
      getData();
    }
    setQuery(search);
  }

  return (
    <div className="App">
      <h1>Fetch API</h1>
      <input
        value={query}
        onChange={searchNameHere}
        placeholder="search name here"
      />
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile no</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
