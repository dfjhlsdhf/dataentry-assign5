import React, { useState } from 'react';
export const DataEntryForm=(props)=> {
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState('');
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    const handleUrlChange = (event) => {
      setUrl(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onDataEntry(file, url);
    };
    return (
        <form onSubmit={handleSubmit}>
          <label>
            File:
            <input type="file" onChange={handleFileChange} />
          </label>
          <label>
            URL:
            <input type="text" value={url} onChange={handleUrlChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
    }
    