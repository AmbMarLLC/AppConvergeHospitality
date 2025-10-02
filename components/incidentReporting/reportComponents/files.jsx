"use client";

import React from "react";

const FileDownloads = ({ fileData }) => {
  if (!fileData || fileData.length === 0) {
    return <p className="text-gray-500">No files available.</p>;
  }

  return (
    <>
      <h2>Attached files</h2>
      <details className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none">
        <summary>Click here to expand</summary>
        <div className="mt-4">
          {fileData.map((file) => (
            <a
              href={file.fileUrl}
              download
              key={file.id}
              className="block text-blue-600 hover:underline my-2"
            >
              {file.fileName}
            </a>
          ))}
        </div>
      </details>
    </>
  );
};

export default FileDownloads;
