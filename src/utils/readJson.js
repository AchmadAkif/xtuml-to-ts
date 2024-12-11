const readJson = async e => {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.readAsText(e.target.files[0], 'UTF-8');

    fileReader.onload = e => {
      try {
        resolve(e.target.result); // Resolve with the parsed content
      } catch (error) {
        reject(error); // Reject on JSON parsing error
      }
    };

    fileReader.onerror = () => {
      reject('Error reading the file');
    };
  });
};

export { readJson };
