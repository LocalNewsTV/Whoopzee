import up from '/arrow-up.svg';
import down from '/arrow-down.svg';
import { Button, Img } from './stepperButton.styles';

type PropTypes = {
  dir: 'up' | 'down';
  step: number;
  state: number;
  setState: (val: number) => void;
}

function StepperButton({dir, step, state, setState}: PropTypes) {
  const next = () => state + (step * (dir === 'up' ? 1 : -1));
  const stepVal = () => setState(next());

  return (
    <Button onMouseUp={stepVal}
      disabled={state < 0 && dir === 'down'}
    >
      <Img src={dir === 'up' ? up : down} />
    </Button>
  );
}

export default StepperButton;
