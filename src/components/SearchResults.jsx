import React from "react";
import { Alert } from "antd";
import { Cards } from "./Cards";


//This will show the result
export const SearchResults = (data, username) => {
  const userdata = data.data;
  return (
    <>
     {/* mapping the gists userdatas */}
      {username !== null && userdata.length !== 0 ? (
        <>
          <Alert
            message={`${data.username}'s Gists`}
            description={`${userdata.length} Gists found`}
            type="success"
            showIcon
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <ul className="paddingData">
            {userdata?.length>0? userdata.map((gist, index) => {
              return <Cards key={gist.id} gistData={gist} />;
            }):null}
          </ul>
        </>
      ) : null}
    </>
  );
};
