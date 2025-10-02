"use client";

import React, { useState } from "react";

const EditFileDownloads = ({ fileData }) => {
  const [files, setFiles] = useState(fileData || []);

  const handleDelete = async (fileUrl, fileId) => {
    try {
      const res = await fetch("/api/deleteFile", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: fileUrl, id: fileId }),
      });

      if (res.ok) {
        setFiles((prev) => prev.filter((f) => f.id !== fileId));
      } else {
        console.error("Failed to delete file");
      }
    } catch (err) {
      console.error("Error deleting file:", err);
    }
  };

  if (files.length === 0) {
    return (
      <>
        <p className="text-gray-700 mb-3">No files uploaded.</p>
        <label className="font-medium mb-2">
          Please upload any supporting files (photos, documents, written
          statements, etc.):
        </label>
        <input
          type="file"
          id="uploadedFiles"
          name="uploadedFiles[]"
          multiple={true}
          className="w-full border border-[#686868] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#5c9c45] focus:outline-none mb-3"
        />
      </>
    );
  }

  return (
    <>
      <h2 className="text-lg font-semibold">Attached files</h2>
      <div className="mt-4 space-y-2">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between rounded-md border border-gray-200 px-3 py-2"
          >
            <a
              href={file.fileUrl}
              download
              className="text-blue-600 hover:underline truncate mr-4"
              style={{ maxWidth: "calc(100% - 40px)" }}
            >
              {file.fileName}
            </a>

            <button
              type="button"
              aria-label={`Delete ${file.fileName}`}
              onClick={() => handleDelete(file.fileUrl, file.id)}
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-red-50 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4 text-red-600"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3m-7 0h8"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditFileDownloads;
