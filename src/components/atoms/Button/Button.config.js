import { parseJSON } from '../../../utils/parser';

const buttonConfig = {
  Parse: {
    onClick: () => parseJSON(fileContent),
  },
  Translate: {},
};

export { buttonConfig };
