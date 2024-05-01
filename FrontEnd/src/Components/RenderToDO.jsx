export const RenderToDo = (props) => {
  return (
    <>
      <div className="border-2 border-solid border-black rounded-3xl px-10 py-10">
        <h1>{props.todo.title}</h1>
        <h2>{props.todo.description}</h2>
        <button className="bg-red-400 rounded-2xl px-3 py-3">
          Mark as Completed
        </button>
      </div>
    </>
  );
};
