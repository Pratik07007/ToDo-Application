import { useState } from "react";

export const AddTo = () => {
  const [addToDosPayload, setAddToDosPayload] = useState(null);
  const handelSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addToDosPayload),
    })
      .then((res) => res.json())
      .then((res) => alert(res.msg));
  };

  return (
    <>
      <form onSubmit={handelSubmit} action="submit">
        <div className="flex flex-col gap-3 px-96 pt-10">
          <label className="text-2xl font-semibold text-green-400">TITLE</label>
          <input
            onChange={(e) =>
              setAddToDosPayload({ ...addToDosPayload, title: e.target.value })
            }
            className=" outline-none border-black border-solid border-2"
            type="text"
          />
          <label className="text-2xl font-semibold text-green-400">
            Description
          </label>
          <input
            onChange={(e) =>
              setAddToDosPayload({
                ...addToDosPayload,
                description: e.target.value,
              })
            }
            className=" outline-none border-black border-solid border-2"
            type="text"
          />
          <button type="submit" className="px-3 py-3 bg-orange-300 rounded-3xl">
            ADD TO DO
          </button>
        </div>
      </form>
    </>
  );
};
