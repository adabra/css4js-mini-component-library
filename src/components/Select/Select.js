import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {displayedValue}<SelectIcon id="chevron-down" strokeWidth="2" size="24px"></SelectIcon>
      <HiddenNativeSelect>{children}</HiddenNativeSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: none;
  appearance: none;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 10px;
  color: ${COLORS.gray700};
  border-radius: 8px;
  width: max-content;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: auto;
  }
`;

const SelectIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-left: 18px;
`;

const HiddenNativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  appearance: none;
`;

export default Select;
