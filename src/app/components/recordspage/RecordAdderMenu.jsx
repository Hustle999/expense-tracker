"use client";

export const RecordAdderMenu = () => {
  return (
    <div>
      <button onClick={() => document.getElementById("my_modal_1").showModal()}>
        + Record
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="flex flex-col bg-white p-8 text-black">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">Add record</h3>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn text-black">X</button>
              </form>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex w-full bg-slate-200 rounded-2xl">
                <div className="text-black text-xl font-semibold rounded-2xl px-10 hover:text-white hover:bg-blue-600">
                  Incomes
                </div>
                <div className="text-black text-xl font-semibold rounded-2xl px-10 hover:text-white hover:bg-green-600">
                  Expenses
                </div>
              </div>
              <div className="bg-slate-200 p-3 rounded-lg">
                <div>Amount</div>
                <input
                  className="bg-slate-200"
                  placeholder="₮ 000.00"
                  type="text"
                />
              </div>
              {/* category songodog heseg */}
              <div>
                <div className="mb-2">Category</div>
                <div>
                  <div className="dropdown w-full">
                    <div
                      tabIndex={0}
                      role="button"
                      className="bg-slate-200 w-full p-2 rounded-lg flex justify-between items-start"
                    >
                      <div className="text-gray-500">Choose your category</div>
                      <div>⌄</div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <a>Item 1</a>
                      </li>
                      <li>
                        <a>Item 2</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* date songodog heseg */}
              <div className="flex gap-5">
                <div className="w-full">
                  <div className="mb-1">Date</div>
                  <input
                    className="bg-slate-200 px-4 py-2 rounded-xl"
                    type="date"
                    id="created-time"
                    name="created-time"
                    min="2020-01-01"
                    max="2030-12-31"
                  />
                </div>
                <div className="w-full">
                  <div className="mb-1">Time</div>
                  <input
                    className="bg-slate-200 px-4 py-2 rounded-xl"
                    type="time"
                    id="created-time"
                    name="created-time"
                    min="T00:00"
                    max="T23:59"
                  />
                </div>
              </div>
              {/* record nemeh */}
              <div className="bg-blue-600 w-full text-white text-center rounded-xl py-2">
                Add Record
              </div>
            </div>
            <div>hi</div>
          </div>
        </div>
      </dialog>
    </div>
  );
};
