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
  const styles = SIZES[size];

  return (
    <Wrapper style={styles} role="progressbar" aria-valuenow={value}>
      <Bar style={styles} value={value} />
    </Wrapper>
  );
};

const Base = styled.span`
  display: inline-block;
  width: 370px;
`;

const Wrapper = styled(Base)`
  height: calc(var(--height) + 2 * var(--padding));
  padding: var(--padding);
  border-radius: var(--outer-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled(Base)`
  width: ${(prop) => (prop.value * 370) / 100}px;
  height: var(--height);
  border-top-left-radius: var(--inner-radius);
  border-bottom-left-radius: var(--inner-radius);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
