import { useState } from "react";
import LUXButton from "luna-rocket/LUXButton";
import LUXColorPicker from "luna-rocket/LUXColorPicker/LUXColorPicker";

const Luna = () => {
  const [colorNumber, setColorNumber] = useState<number>(1);

  return (
    <div>
      <LUXButton
        type="sprite"
        imageUrl="http://luna.duzon.com/imgs/common/sp_lux.png"
        innerStyle={{ backgroundPosition: "-150px 0px", width: "16px", height: "14px" }}
        style={{ fontSize: 0, padding: 0, width: "27px" }}
        onClick={() => console.log("click")}
      />
      <br />
      <br />
      <LUXColorPicker uniqueId="colorPicker" value={colorNumber} onChange={(evnet, value) => setColorNumber(value)} />
    </div>
  );
};

export default Luna;
