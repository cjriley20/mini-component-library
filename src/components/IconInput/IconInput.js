import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon} size="16" strokeWidth="1" />
      </IconWrapper>
      <TextInput width={width} {...delegated}></TextInput>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const TextInput = styled.input`
  font-size: ${14 / 16}rem;
  color: ${COLORS.gray700};
  font-weight: 700;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  padding: 4px 0px;
  padding-left: 24px;
  width: ${(props) => props.width}px;
  height: 24px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 0;
  color: ${COLORS.gray700};
`;

export default IconInput;
