import { StyledBoldData, StyledData, StyledRow } from "../Scorecard/scorecard.styles";
import Checkbox from "../common/Checkbox/Checkbox";

type PropTypes = {
  locked: boolean;
  state: boolean;
  setState: (val: boolean) => void;
  title: string;
  details: string;
  lockedState: boolean;
  setLockedAlt: (val: boolean) => void;
};

function CheckboxRow({ locked, state, setState, title, details, lockedState, setLockedAlt}: PropTypes) {
  return (
    <StyledRow
      onClick={() => setLockedAlt(!lockedState)}      
      locked={locked}
    >
      <StyledBoldData>{title}</StyledBoldData>
      <StyledData>{details}</StyledData>
      <StyledData>
        <Checkbox state={state} setState={setState} />
      </StyledData>
    </StyledRow>
  );
};

export default CheckboxRow;
