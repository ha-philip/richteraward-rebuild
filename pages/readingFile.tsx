import { useState, useEffect } from 'react';

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/api/files')
      .then((response) => response.json())
      .then((data) => setFiles(data.files))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {files.map((file, index) => (
        <li key={index}>{file}</li>
      ))}
    </ul>
  );
}

export default FileList;





