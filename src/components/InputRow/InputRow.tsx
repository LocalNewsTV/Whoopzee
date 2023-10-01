import { StyledBoldData, StyledData, StyledRow } from "../Scorecard/scorecard.styles";
import NumberInput from "../common/NumberInput/NumberInput";
import StepperButton from "../common/StepperButton/StepperButton";

type PropTypes = {
  state: number;
  setState: (val: number) => void;
  step: number;
  title: string;
  details: string;
}

function InputRow({state, setState, step, title, details}: PropTypes) {
  return (
    <StyledRow locked={state !== 0}>
    <StyledBoldData>{title}</StyledBoldData>
    <StyledData>{details}</StyledData>
    <StyledData>
      <NumberInput
        state={state}
        setState={setState}
        step={step}
      />
      <StepperButton
        state={state}
        setState={setState}
        step={step}
        dir={"up"}
      />
      <StepperButton
        state={state}
        setState={setState}
        step={step}
        dir={"down"}
      />
    </StyledData>
  </StyledRow>
  );
}

export default InputRow;
