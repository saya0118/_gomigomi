import React from "react";
import axios from 'axios';
import { Map } from "../Map";
import { SearchBox } from "../SearchBox";

export const Page = () => {
  return (
    <div>
      <Map />
      <SearchBox />
    </div>
  );
};
