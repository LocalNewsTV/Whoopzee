import StyledCheckbox from "./checkbox.styles";

type PropTypes = {
  setState: (val: boolean) => void,
  state: boolean,
}
function Checkbox({setState, state}: PropTypes) {
  return (
    <StyledCheckbox
      type="checkbox"
      checked={state}
      onChange={() => setState(!state)}
    />
  )
}

export default Checkbox;
