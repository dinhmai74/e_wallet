// @flow

import variable from './../variables/platform';
import { getElevation } from 'utils'

export default (variables /* : * */ = variable) => {
  const inputTheme = {
    '.multiline': {
      height: null
    },
    height: variables.inputHeightBase,
    color: variables.inputColor,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    fontSize: variables.inputFontSize,

  };

  return inputTheme;
};
