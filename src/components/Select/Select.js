import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <VisibleSelect isFocused={isFocused}>
      <Text>{displayedValue}</Text>
      <IconWrapper>
        <Icon id="chevron-down" size="24" strokeWidth="1" />
      </IconWrapper>
      <HiddenSelect
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {children}
      </HiddenSelect>
    </VisibleSelect>
  );
};

const HiddenSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
`;

const VisibleSelect = styled.div`
  position: relative;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;
  width: fit-content;
  color: ${COLORS.gray700};
  outline: ${({ isFocused }) =>
    isFocused ? `2px solid ${COLORS.primary}` : 'none'};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Text = styled.div`
  display: inline-block;
  font-size: 1rem;
  margin-right: 16px;
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export default Select;
