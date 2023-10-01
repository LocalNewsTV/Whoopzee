import styled from '@emotion/styled';

const evenBG = '#D0BCA0';
const oddBG = '#E7DED0';
const headerBG = '#9F825B';
const lockedBG = '#999';
type RowTypes = {
  locked: boolean;
}

export const StyledRow = styled.tr<RowTypes>`
  &:nth-of-type(odd){
    background-color: ${({locked}) => locked ? lockedBG : oddBG};
  }
  &:nth-of-type(even){
    background-color: ${({locked}) => locked ? lockedBG : evenBG};
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  max-width: 500pt;
`;

export const StyledData = styled.td`
  text-wrap: wrap;
  padding: 2pt;
  box-sizing: border-box;
  min-width: 65pt;
  min-height: 100%;
  align-items: center;
  text-align: left;
  font-size: 0.75em;
  tr > & + &:last-of-type {
    display: flex;
    align-items: center;
    justify-content: right;
  }
`;

export const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 10pt;
`;
export const StyledBoldData = styled.td`
  font-weight: 600;
  font-size: 1.25em;
  height: 30pt;
  // width: 60pt;
  padding: 0 0.5em;
  &:last-of-type {
    padding-left: 0em;
    text-align: right;
  }
`;

export const StyledHead = styled.thead`
  background-color: ${headerBG};
  border: 1pt solid #82614A;
`;
