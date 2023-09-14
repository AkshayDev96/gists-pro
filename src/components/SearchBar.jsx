import React, { useState } from "react";
import { Input, Alert, Spin } from "antd";
import { getAllGistUrl } from "./config";
import { SearchResults } from "./SearchResults";

const { Search } = Input;


//here is the search bar
export const SearchBar = () => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  //on search trigger
  const onSearch = async (username) => {
    const usersname = username.trim()
    setUsername(usersname);
    setLoading(true);
    if (usersname && usersname !== "") {
      try {
        const URL = getAllGistUrl(usersname);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setLoading(false);
        setError(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    } else if (usersname === "") {
      setLoading(false);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
    {/* search box */}
      <Search
        placeholder="Search by User Name here....."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />

      {/* showing the loader */}
      {loading ? <Spin tip="Loading..." style={{ margin: 10 }} /> : null}

      {/* search results */}
      {username !== "" && data && !error ? (
        <SearchResults data={data} username={username} />
      ) : null}

      {/* showing the alerts error if no user data found */}
      {username && data.length === 0 ? (
        <Alert
          message="Error"
          description="No data for this User"
          type="error"
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : null}

      {/* if invalid user name is entered */}
      {username ==='' ? (
        <Alert
          message="Error"
          description="Please Enter Valid User Name"
          type="error"
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : null}
    </>
  );
};
