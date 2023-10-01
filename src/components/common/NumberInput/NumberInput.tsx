import { ChangeEvent } from "react";
import StyledNumberInput from "./numberInput.styles";

type PropTypes = {
  state: number;
  setState: (val: number) => void;
  step: number;
}

function NumberInput({ state, setState, step }: PropTypes) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(parseInt(event.target.value));
  }
  return (
    <StyledNumberInput
      type="number"
      value={state}
      step={step}
      min={0}
      onChange={handleChange}
    />
  )
}

export default NumberInput;
