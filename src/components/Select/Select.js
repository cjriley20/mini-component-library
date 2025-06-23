import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <VisibleSelect>
        <Text>{displayedValue}</Text>
        <IconWrapper>
          <Icon id="chevron-down" size="20" strokeWidth="2" />
        </IconWrapper>
      </VisibleSelect>
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
    </>
  );
};

const HiddenSelect = styled.select`
  opacity: 0;
`;

const VisibleSelect = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;
  width: fit-content;
  color: ${COLORS.gray700};

  &:focus {
    outline: 2px solid ${COLORS.primary};
  }

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
