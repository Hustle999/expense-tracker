import { Bagana, BaganaDiagram } from "./charts/BaganaDiagram";
import { DuguiDiagram } from "./charts/DuguiDiagram";

export const Section2 = () => {
  return (
    <div className="grid grid-cols-2 gap-10 px-[100px]">
      <div className="h-[350px] rounded-xl bg-white shadow-sm">
        <BaganaDiagram />
      </div>
      <div className="grid grid-cols-2 h-[350px] rounded-xl bg-white shadow-sm">
        <DuguiDiagram />
        <div>{/* Title of column end orno */}</div>
      </div>
    </div>
  );
};
