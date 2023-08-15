import {Text as RNEText} from '@rneui/themed';

import React, {FC} from 'react';
import {ITextProps} from './TextType';
import {styles} from './styles';

const Text: FC<ITextProps> = ({children, style}) => {
  const combinedStyle = [style, styles.textStyle];
  return <RNEText style={combinedStyle}>{children}</RNEText>;
};

export default Text;
