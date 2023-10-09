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
    height: 16,
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
        "--padding": style.padding + "px",
        "--border-radius": style.borderRadius + "px"
      }}>
      <Trimmer>
        <Bar
          value={value}
          style={{
            '--width': value + '%',
            "--height": style.height + "px",
          }}></Bar>
      </Trimmer>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: var(--width);
  padding: var(--padding);
  border-radius: var(--border-radius);
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`;

const Trimmer = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  width: var(--width);
`;

export default ProgressBar;
