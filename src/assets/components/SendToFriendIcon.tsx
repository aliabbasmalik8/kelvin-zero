import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const SendToFriendIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.213 14.493a2.43 2.43 0 0 0-.44 0A5.893 5.893 0 0 1 6.08 8.587c0-3.267 2.64-5.92 5.92-5.92a5.924 5.924 0 0 1 5.92 5.92c-.013 3.2-2.533 5.8-5.707 5.906ZM21.88 5.333A4.663 4.663 0 0 1 26.547 10c0 2.52-2 4.573-4.494 4.667a1.51 1.51 0 0 0-.347 0M5.546 19.413c-3.226 2.16-3.226 5.68 0 7.827 3.667 2.453 9.68 2.453 13.347 0 3.227-2.16 3.227-5.68 0-7.827-3.653-2.44-9.667-2.44-13.347 0ZM24.453 26.667c.96-.2 1.867-.587 2.614-1.16 2.08-1.56 2.08-4.134 0-5.694-.734-.56-1.627-.933-2.574-1.146"
    />
  </Svg>
);
export default SendToFriendIcon;
