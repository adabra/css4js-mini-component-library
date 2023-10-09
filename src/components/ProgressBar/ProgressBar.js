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

const ProgressBar = ({ value, size }) => {
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
      <Trimmer>
        <Bar
          value={value}
          style={{
            '--width': value + '%',
          }}></Bar>
      </Trimmer>
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

const Trimmer = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: 100%;
  width: var(--width);
`;

export default ProgressBar;
