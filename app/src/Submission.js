import React from 'react';
import styled from 'styled-components';
import SelectMult from './components/SelectMult';
import Selector from './components/MajorSelector';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const Submission = () => (
  <div>
    <Wrapper>
      <h2>Submission</h2>
      <SelectMult />
    </Wrapper>
  </div>
)