import React, { useState } from "react";
import { UFOTd, UFOTr, UFOTh, UFOTable } from "luna-ufo";
import { UFODateField } from "luna-ufo";

const Ufo = () => {
  const [date, setDate] = useState(new Date("2017/12/25"));

  return (
    <UFOTable style={{ width: "460px" }} widths={["100px", "130px", "100px", "130px"]}>
      {/*1st Row*/}
      <UFOTr>
        {/*발행일자*/}
        <UFOTh style={{ textAlign: "left" }}>발행일자</UFOTh>
        <UFOTd>
          <UFODateField
            value={date}
            onChange={(event, value) => {
              setDate(value);
            }}
          />
        </UFOTd>

        {/*마감일자*/}
        <UFOTh>마감일자</UFOTh>
        <UFOTd>
          <UFODateField />
        </UFOTd>
      </UFOTr>
    </UFOTable>
  );
};

export default Ufo;
