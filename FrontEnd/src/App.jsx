import React, { useEffect, useState } from "react";
import { AddTo } from "./Components/AddTo";
import { RenderToDo } from "./Components/RenderToDO";

const App = () => {
  const [toDo, setToDo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((res) => setToDo(res));
  }, [toDo]);
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <AddTo />

        {toDo.map((todos) => {
          return <RenderToDo key={todos._id} todo={todos} />;
        })}
      </div>
    </>
  );
};

export default App;
