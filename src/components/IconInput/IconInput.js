import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    underlineThickness: 1,
    fontSize: (14 / 16),
    iconSize: 16,
    paddingLeft: 16 + 8,
    lineMargin: 4,
  },
  large: {
    underlineThickness: 2,
    fontSize: (18 / 16),
    iconSize: 24,
    paddingLeft: 24 + 12,
    lineMargin: 6,
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
    <Wrapper>
      <PaddedInput
        type="text"
        placeholder={placeholder}
        style={{
          "--width": width + 'px',
          '--padding-left': style.paddingLeft + "px",
          "--font-size": style.fontSize + "rem",
        }}>
      </PaddedInput>
      <FloatingIcon id={icon} size={style.iconSize} strokeWidth={2}></FloatingIcon>

      <VisuallyHidden>{label}</VisuallyHidden>

      <HorizontalLine style={{
        '--height': style.underlineThickness + "px",
        '--margin-top': style.lineMargin + "px"
      }}>
      </HorizontalLine>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  &:hover * {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline: auto;
    outline-offset: 4px;
  }
`;

const FloatingIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  color: ${COLORS.gray700};
`;

const PaddedInput = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  width: var(--width);
  padding-left: var(--padding-left);
  color: ${COLORS.gray500};
  font-size: var(--font-size);
  font-weight: 700;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: var(--height);
  background-color: ${COLORS.black};
  border-radius: 1px;
  margin-top: var(--margin-top);
`;

export default IconInput;
