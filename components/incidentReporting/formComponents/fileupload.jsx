import { useState, useEffect } from "react";

export default function FileUpload({}) {
  return (
    <>
      <h2>Upload Files</h2>
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
