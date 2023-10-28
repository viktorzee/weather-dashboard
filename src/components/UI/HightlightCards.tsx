import { HightlightsCardProps } from "../../types";

const hightlightsCard = ({value:{unit,value},title}:HightlightsCardProps) => {
  return (
    <div className="hightlightcardStyle ">
      <div>
        <h1 className="text-xl">{title}</h1>
      </div>
      <div>
        <p className="text-[64px]">{value} {unit}</p>
      </div>
    </div>
  );
}
export  default hightlightsCard