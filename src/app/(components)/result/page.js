"use client";
import { useState, useEffect } from "react";
import Fixtures from "./fixtures";
import LiveResults from "./livescore";

const Results = () => {
  return (
    <>
      <LiveResults />
      <Fixtures />
    </>
  );
};

export default Results;
