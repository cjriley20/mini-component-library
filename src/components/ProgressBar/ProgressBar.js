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

const WIDTH = 370;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  const padding = parseInt(styles['--padding']) || 0;
  const innerWidth = (value / 100) * (WIDTH - 2 * padding);

  return (
    <OuterBar
      style={styles}
      width={WIDTH}
      role="progressbar"
      aria-valuenow={value}
    >
      <InnerBar style={styles} width={innerWidth} />
    </OuterBar>
  );
};

const OuterBar = styled.div`
  width: ${(props) => props.width}px;
  height: calc(var(--height) + 2 * var(--padding));
  padding: var(--padding);
  border-radius: var(--outer-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const InnerBar = styled.div`
  width: ${(props) => props.width}px;
  height: var(--height);
  border-top-left-radius: var(--inner-radius);
  border-bottom-left-radius: var(--inner-radius);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
