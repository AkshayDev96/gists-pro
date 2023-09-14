import React from "react";
import { TitleDesc } from "./TitleDesc";
import { SearchBar } from "./SearchBar";
import { Divider } from "antd";

const Main = () => (
  <>
    {/* the below component will show the title and description at the top */}
    <TitleDesc />
    {/* search box */}
    <Divider orientation="left">Search by User</Divider>
    <SearchBar />
  </>
);

export default Main;
