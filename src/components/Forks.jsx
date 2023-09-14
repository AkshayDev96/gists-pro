import React from "react";
import { Avatar, Image } from "antd";


//Here is the Forks listings
export const Forks = (data) => {
  const forks = data.forks.forks || [];
  console.log("forks--->",forks);


  return (
    <div className="forksBox">
      <p>Forks:</p>
      {forks && forks.length !== 0 ? forks.map((fork, i) => (
          <ul key={i}>
          <li>
          <a
            href={`https://gist.github.com/${fork.id}`}
            target="_blank"
            rel="noreferrer"
          >
            {/* showing user profiles */}
            <Avatar
              src={<Image src={fork.user.avatar_url} />}
              style={{ margin: 5 }}
            />
            {/* fork user logins */}
            {fork.user.login}
          </a>
        </li>
        </ul>
      )) : <p>No forks yet.</p>}
    </div>
  );
};
