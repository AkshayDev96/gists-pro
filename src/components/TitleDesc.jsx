import React from 'react'; 
  

//this will show the title and description at the top
export const TitleDesc=()=>
{

  // showing the instructions and suggestions 
  return (
      <div>
        <h1>My Gist API</h1>
      <p>Features:</p>
      <ul style={{fontWeight:'bold'}}>
        <li>
          Search: When a user enters a username, it should be able to get a
          full list of public gists by that user.
        </li>
        <li>
          Filetype: Convert the filetypes of the files in the gist into a
          tag/badge, (e.g, if the returned gist has list of files containing
          python and javascript files, the gist should have the respective
          tags/badges).
        </li>
        <li>
          Fork: Username/Avatar of the last 3 users who forked it with avatar
          linking to the fork.
        </li>
      </ul>
      <p>Some of username to test the functionality are addyosmani, octocat</p>
    </div>
  );
};