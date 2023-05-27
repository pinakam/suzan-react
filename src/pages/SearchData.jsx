import React, { useRef, useState } from "react";
import { Table } from "react-bootstrap";

function SearchData() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const inputResult = useRef("");
  let typingTimeout = null;

  const handleSearch = (e) => {
    const input = e.target.value.toLowerCase();
    setSearch(input);

    clearTimeout(typingTimeout);

    if (input.length > 0) {
      typingTimeout = setTimeout(() => {
        if (input === inputResult.current) {
          fetch(
            `https://jobfair.psolution.in/api/apply-jobseeker?title=${input}`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data.title);
              setResults(data.title);
            })
            .catch((error) => console.error("Error fetching results:", error));
        }
      }, 1000);
      inputResult.current = input;
    } else {
      setResults([]);
      inputResult.current = "";
    }
  };

  return (
    <div className="container mt-5">
      {/* calling api on search  dynamically url change */}
      <h1>Search course</h1>
      <input
        type="text"
        placeholder="Search Course"
        value={search}
        onChange={handleSearch}
        className="form-control bg-light  w-25"
      />

      {results.length === 0 ? (
        <h6 className="text-muted mt-3">No results found</h6>
      ) : (
        <Table striped>
          <thead>
            <tr>
              <th>ID</th>
              <th>Course</th>
              <th>Education</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {results.map((items) => {
              return (
                <>
                  <tr>
                    <td>{items.id}</td>
                    <td>{items.title}</td>
                    <td>{items.education}</td>
                    <td>{items.jobType}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default SearchData;
