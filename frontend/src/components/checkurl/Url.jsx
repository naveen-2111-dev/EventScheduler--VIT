import React from 'react';

export default UrlChecker = (url, status) => {
    const img = new Image();
    img.src = url;
  
    const handleLoad = () => callback(true);
    const handleError = () => callback(false);

    img.onload = handleLoad;
    img.onerror = handleError;
    img.onabort = handleError; 
  
    if (img.complete) {
        callback(!img.naturalWidth); 
    }
};