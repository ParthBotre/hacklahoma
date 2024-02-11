import { useState } from 'react';

const ImageUpload = ({ onUpload }) => {
  const handleUpload = (e) => {
    const files = e.target.files;
    onUpload(files);
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleUpload} />
    </div>
  );
};

export default ImageUpload;