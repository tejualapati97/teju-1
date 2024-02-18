import React, { useState } from "react";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleAdd = (e) => {
    if (item !== "") {
      setList([...list, item]);
      setItem("");
    }
  };
  return (
    <>
      <input type="text" value={item} onChange={(e) => handleChange(e)} />
      <button onClick={handleAdd}>Add</button>
      <>
        {list.length > 0
          ? list.map((teju, index) => {
              return <li key={index}>{teju}</li>;
            })
          : <p>no data available</p>}
      </>
    </>
  );
};

export default Todo;
