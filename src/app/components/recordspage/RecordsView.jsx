export const RecordsView = () => {
  return (
    <div className="flex flex-col w-full gap-[20px] pl-[50px]">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div>L</div>
          <div>Last 30 days</div>
          <div>R</div>
        </div>
        <div>Newest first</div>
      </div>
      <div>
        <div className="font-semibold pb-5">Today</div>
        <div className="flex flex-col gap-2">
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
        </div>
      </div>
      <div>
        <div className="font-semibold py-5">Yesterday</div>
        <div className="flex flex-col gap-2">
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
          <div className="bg-white p-6 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};
