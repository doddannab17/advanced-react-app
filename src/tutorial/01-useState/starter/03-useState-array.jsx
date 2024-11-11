import { useState } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [persons, setPersons] = useState(data);

  function removePerson(id) {
    const newData = persons
      .filter((person) => person.id != id)
      .map((person) => person);
    setPersons(newData);
  }

  function removeAllPersons() {
    setPersons([]);
  }

  return (
    <>
      <ul className="user-container1">
        {persons.map((line) => {
          return (
            <div key={line.id}>
              <div className="item">{line.name}</div>
              <button
                onClick={() => {
                  removePerson(line.id);
                }}
              >
                Remove from list
              </button>
            </div>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          removeAllPersons();
        }}
      >
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
