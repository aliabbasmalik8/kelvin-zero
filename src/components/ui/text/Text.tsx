import {Text as RNEText} from '@rneui/themed';

import React, {FC} from 'react';
import {ITextProps} from './TextType';

const Text: FC<ITextProps> = ({children, style}) => {
  return <RNEText style={style}>{children}</RNEText>;
};

export default Text;
