import React from "react";
import RadiusDisplayer from "../components/RadiusDisplayer";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function ResultBar() {
  return (
    <Div>
      <RadiusDisplayer
        color={"rgb(71, 58, 210)"}
        status={"todos"}
        display={6}
      />
      <RadiusDisplayer status={"done"} display={3} />
    </Div>
  );
}
