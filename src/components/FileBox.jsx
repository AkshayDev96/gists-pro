import React from "react";


//Here is the fileBox
export const FileBox = (filelist) => {
  const files = filelist.filelist;
  return (
    <div className="fileBox">
      <p>Files:</p>
      {/* mapping the files results */}
      <ul>
        {Object.values(files).map((file, index) => {
          return (
            <li key={index}>
              <a href={file.raw_url} target="_blank" rel="noreferrer">
                {file.filename}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
