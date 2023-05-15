import React, { useState } from 'react';
import axios from 'axios';

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  function handleFileUpload(e) {
    const file = e.target.files[0];
    if (file && file.name.endsWith('.csv')) {
      setSelectedFile(file);
    } else {
      setErrorMessage('Selecione um arquivo CSV.');
      setSelectedFile(null);
    }
  }

  async function handleUpload() {
    if (!selectedFile) {
      setErrorMessage('Selecione um arquivo para enviar.');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);
    try {
      await axios.post('/upload-csv', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Arquivo enviado com sucesso!');
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar o arquivo.');
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={handleUpload}>Enviar</button>
    </div>
  );
}

export default FileUploader;