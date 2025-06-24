import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const pxToRem = (px, base = 16) => `${px / base}rem`;

const SIZES = {
  small: {
    'icon-size': '16',
    'stroke-width': '1',
    '--font-size': pxToRem(14),
    '--height': pxToRem(24),
    '--padding-left': '24px',
    '--padding': '4px',
    '--border-width': '1px',
  },
  large: {
    'icon-size': '24',
    'stroke-width': '2',
    '--font-size': pxToRem(18),
    '--height': pxToRem(36),
    '--padding-left': '36px',
    '--padding': '8px',
    '--border-width': '2px',
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = { ...SIZES[size], '--width': `${width}px` };

  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          id={icon}
          size={styles['icon-size']}
          strokeWidth={styles['stroke-width']}
        />
      </IconWrapper>
      <TextInput style={styles} {...delegated}></TextInput>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const TextInput = styled.input`
  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding: var(--padding) 0px;
  padding-left: var(--padding-left);
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;
  outline-color: ${COLORS.primary};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: ${COLORS.gray700};
`;

const Wrapper = styled.div`
  position: relative;

  &:hover ${IconWrapper} {
    color: ${COLORS.black};
  }

  &:hover ${TextInput} {
    color: ${COLORS.black};
  }
`;

export default IconInput;
