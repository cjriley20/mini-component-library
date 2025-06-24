import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    'icon-size': '16',
    '--font-size': `${14 / 16}rem`,
    '--height': '24px',
    '--padding-left': '24px',
    '--padding': '4px',
    '--border-width': '1px',
  },
  large: {
    'icon-size': '24',
    '--font-size': `${18 / 16}rem`,
    '--height': '36px',
    '--padding-left': '36px',
    '--padding': '8px',
    '--border-width': '2px',
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = { ...STYLES[size], '--width': `${width}px` };

  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} size={styles['icon-size']} strokeWidth="1" />
      </IconWrapper>
      <TextInput style={styles} {...delegated}></TextInput>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const TextInput = styled.input`
  font-size: var(--font-size);
  color: ${COLORS.gray700};
  font-weight: 700;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  padding: var(--padding) 0px;
  padding-left: var(--padding-left);
  width: var(--width);
  height: var(--height);

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

export default IconInput;
