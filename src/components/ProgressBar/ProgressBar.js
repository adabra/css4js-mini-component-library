/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4
  },
  large: {
    height: 24,
    padding: 4,
    borderRadius: 8
  }
}

const ProgressBar = ({ value, size, width}) => {
  const style = STYLES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      size={size}
      style={{
        "--height": style.height + "px",
        "--padding": style.padding + "px",
        "--border-radius": style.borderRadius + "px"
      }}>
      <Bar
        value={value}
        style={{
          '--width': value + '%',
        }}></Bar>
        <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--border-radius);
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${ p => calculateRightBorderRadius(p.value)} ;
  border-bottom-right-radius: ${ p =>  calculateRightBorderRadius(p.value)} ;
  width: var(--width);
`;

const calculateRightBorderRadius = (progressValue) => ((progressValue - 98) * 2) + "px";

export default ProgressBar;
