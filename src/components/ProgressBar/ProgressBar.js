/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const pxToRem = (px, base = 16) => `${px / base}rem`;

const SIZES = {
  small: {
    '--height': pxToRem(8),
    '--outer-radius': '4px',
    '--inner-radius': '4px',
    '--padding': '0px',
  },
  medium: {
    '--height': pxToRem(12),
    '--outer-radius': '4px',
    '--inner-radius': '4px',
    '--padding': '0px',
  },
  large: {
    '--height': pxToRem(16),
    '--outer-radius': '8px',
    '--inner-radius': '4px',
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
      <InnerBar style={styles} />
    </OuterBar>
  );
};

const OuterBar = styled.div`
  padding: var(--padding);
  border-radius: var(--outer-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const InnerBar = styled.div`
  width: var(--width);
  height: var(--height);
  border-top-left-radius: var(--inner-radius);
  border-bottom-left-radius: var(--inner-radius);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
