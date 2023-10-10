import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    borderWidth: 1,
    verticalPadding: 4,
    fontSize: (14 / 16),
    iconSize: 16,
    iconMarginRight: 8,
  },
  large: {
    borderWidth: 2,
    verticalPadding: 6,
    fontSize: (18 / 16),
    iconSize: 24,
    iconMarginRight: 12,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const style = SIZES[size];

  return (
    <Wrapper style={{
      "--width": width + 'px',
      '--border-width': style.borderWidth + "px",
    }}>
      <LineWrapper>
        <IconWrapper style={{
          "--icon-margin-right": style.iconMarginRight + 'px'
        }}>
          <Icon id={icon} size={style.iconSize} strokeWidth={2}></Icon>
        </IconWrapper>

        <TextInput
          type="text"
          placeholder={placeholder}
          style={{
            '--font-size': style.fontSize + 'rem',
            '--width': (width - style.iconSize - style.iconMarginRight) + 'px',
          }}></TextInput>
      </LineWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--width);
  border-bottom: var(--border-width) solid ${COLORS.black};
  color: ${COLORS.gray700};
  &:focus-within {
    outline: auto;
    outline-offset: 4px;
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const LineWrapper = styled.div`
  padding-bottom: 3px;
  padding-top: 4px;
  white-space: nowrap;
`;

const IconWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: var(--icon-margin-right);
  color: inherit;
`;

const TextInput = styled.input`
  border: none;
  font-size: var(--font-size);
  color: inherit;
  font-weight: 700;
  line-height: 1.125;
  display: inline-block;
  vertical-align: bottom;
  width: var(--width);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 500;
  }

  &:focus {
    outline: none;
  }
`;

export default IconInput;
