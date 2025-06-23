/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--radius': '4px',
    '--padding': '0px',
  },
  medium: {
    '--height': '12px',
    '--radius': '4px',
    '--padding': '0px',
  },
  large: {
    '--height': '16px',
    '--radius': '8px',
    '--padding': '4px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = { ...SIZES[size], '--width': `${value}%` };

  return (
    <OuterBar
      style={styles}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <InnerBarWrapper>
        <InnerBar style={styles} />
      </InnerBarWrapper>
    </OuterBar>
  );
};

const OuterBar = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const InnerBarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const InnerBar = styled.div`
  width: var(--width);
  height: var(--height);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
