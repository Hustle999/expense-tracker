export const RecordMenu = () => {
  return (
    <div className="flex flex-col gap-5 w-[400px] h-full p-[20px] bg-white rounded-xl">
      <div className="font-semibold text-2xl">Records</div>
      <button className="bg-blue-600 text-white p-1 rounded-2xl">+ Add</button>
      <input
        className="border p-1 rounded-md"
        type="search"
        placeholder="Search..."
        name=""
        id=""
      />
      <div className="flex flex-col">
        <div className="font-semibold">Types</div>
        <div className="ml-5">
          <li>All</li>
          <li>Income</li>
          <li>Expense</li>
        </div>
      </div>
      <div>
        <div className="font-semibold">Catagory</div>
        <div></div>
        <button className="ml-5 flex gap-2 text-blue-500">
          + <div className="text-black">Add catagory</div>{" "}
        </button>
      </div>
    </div>
  );
};
