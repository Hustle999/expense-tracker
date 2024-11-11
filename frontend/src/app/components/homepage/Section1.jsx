export const Section1 = () => {
  return (
    <div className="grid grid-cols-3 gap-10 px-[100px]">
      <div className="flex flex-col justify-between h-[250px] rounded-xl bg-blue-600 shadow-sm p-10">
        <div className="flex items-center gap-3">
          <img width={30} height={30} src="./VectorWhite.png" alt="" />
          <p className="text-white text-xl font-semibold">Geld</p>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-slate-300">Cash</div>
            <div className="text-white text-xl font-bold">10,000,00</div>
          </div>
          <div>
            <img src="./CardWire.png" alt="" />
          </div>
        </div>
      </div>

      <div className="h-[250px] p-8 rounded-xl bg-white shadow-sm">
        <div className="mb-5 font-semibold">Your Income</div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-5xl">1,200,000 $</div>
            <div className="text-slate-400">Your Income Amount</div>
          </div>
          <div>32% from last month</div>
        </div>
      </div>

      <div className="h-[250px] p-8 rounded-xl bg-white shadow-sm">
        <div className="mb-5 font-semibold">Total Expenses</div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div className="text-5xl">1,200,000 $</div>
            <div className="text-slate-400"> Your Expense Amount</div>
          </div>
          <div>32% from last month</div>
        </div>
      </div>
    </div>
  );
};
