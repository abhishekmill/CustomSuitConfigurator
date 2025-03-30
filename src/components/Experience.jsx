import React from "react";
import { Suit } from "./Suit";

const Experience = ({ path }) => {
  return (
    <>
      <group position={[0, -0.3, 0]}>
        <Suit path={path} />
      </group>
    </>
  );
};

export default Experience;
