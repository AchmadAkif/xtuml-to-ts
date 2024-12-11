import { point1, point2 } from './parsingUnit';

const parseJSON = fileContent => {
  if (!fileContent) {
    alert('Please select a JSON file first');
    return;
  }
  const content = JSON.parse(fileContent);

  point1(content);
  point2(content);
};

export { parseJSON };
