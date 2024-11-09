import { Header } from "../homepage/Header";
import { RecordMenu } from "./RecordMenu";
import { RecordsView } from "./RecordsView";

export const RecordsPage = () => {
  return (
    <main className="flex flex-col w-full h-screen gap-5 bg-slate-200">
      <Header />
      <div className="flex px-[100px]">
        <RecordMenu />
        <RecordsView />
      </div>
    </main>
  );
};
