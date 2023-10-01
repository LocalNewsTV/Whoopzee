import { useState } from "react";
import Checkbox from "../common/Checkbox/Checkbox";
import NumberInput from "../common/NumberInput/NumberInput";
import arrow from "/arrow-right.svg";

import {
  StyledBoldData,
  StyledData,
  StyledHead,
  StyledRow,
  StyledSpan,
  StyledTable,
} from "./scorecard.styles";
import StepperButton from "../common/StepperButton/StepperButton";
import Button from "../common/Button/Button.styles";

function Scorecard() {
  const FULL_HOUSE_VALUE = 25;
  const SM_STRAIGHT_VALUE = 30;
  const LG_STRAIGHT_VALUE = 40;
  const WHOOPZEE_VALUE = 50;
  const WHOOPZEE_BONUS = 100;

  const [aces, setAces] = useState<number>(0);
  const [twos, setTwos] = useState<number>(0);
  const [threes, setThrees] = useState<number>(0);
  const [fours, setFours] = useState<number>(0);
  const [fives, setFives] = useState<number>(0);
  const [sixes, setSixes] = useState<number>(0);

  const sumSolos = (): number => {
    let sum = 0;
    sum += aces >= 0 ? aces : 0;
    sum += twos >= 0 ? twos : 0;
    sum += threes >= 0 ? threes : 0;
    sum += fours >= 0 ? fours : 0;
    sum += fives >= 0 ? fives : 0;
    sum += sixes >= 0 ? sixes : 0;
    return sum;
  };

  const bonus = sumSolos() >= 63 ? 35 : 0;
  const [threeOfAKind, setThreeOfAKind] = useState<number>(0);
  const [fourOfAKind, setFourOfAKind] = useState<number>(0);
  const [fullHouse, setFullHouse] = useState<boolean>(false);
  const [smStraight, setSmStraight] = useState<boolean>(false);
  const [lgStraight, setLgStraight] = useState<boolean>(false);
  const [whoopzee, setWhoopzee] = useState<boolean>(false);
  const [chance, setChance] = useState<number>(0);
  const [whoopzeeBonus, setWhoopzeeBonus] = useState<number>(0);

  const [lockedFullHouse, setLockedFullHouse] = useState<boolean>(false);
  const [lockedSmStraight, setLockedSmStraight] = useState<boolean>(false);
  const [lockedLgStraight, setLockedLgStraight] = useState<boolean>(false);
  const [lockedWhoopzee, setLockedWhoopzee] = useState<boolean>(false);

  const sumUpper = (): number => sumSolos() + bonus;

  const sumBottom = (): number => {
    let sum: number = 0;
    if (threeOfAKind > 0) {
      sum += threeOfAKind;
    }
    if (fourOfAKind > 0) {
      sum += fourOfAKind;
    }
    if (chance > 0) {
      sum += chance;
    }
    sum += fullHouse ? FULL_HOUSE_VALUE : 0;
    sum += smStraight ? SM_STRAIGHT_VALUE : 0;
    sum += lgStraight ? LG_STRAIGHT_VALUE : 0;
    sum += whoopzee ? WHOOPZEE_VALUE : 0;
    if (whoopzeeBonus > 0) {
      sum += whoopzeeBonus * WHOOPZEE_BONUS;
    }
    return sum;
  };
  const sumTotal = (): number => sumUpper() + sumBottom();
  const newGame = () => {
    if (confirm("Are you sure you want to reset the score sheet?")) {
      setAces(0);
      setTwos(0);
      setThrees(0);
      setFours(0);
      setFives(0);
      setSixes(0);
      setThreeOfAKind(0);
      setFourOfAKind(0);
      setSmStraight(false);
      setLgStraight(false);
      setFullHouse(false);
      setWhoopzee(false);
      setChance(0);
      setWhoopzeeBonus(0);
      setLockedFullHouse(false);
      setLockedSmStraight(false);
      setLockedLgStraight(false);
      setLockedWhoopzee(false);
    }
  };
  return (
    <>
      <StyledTable>
        <StyledHead>
          <StyledBoldData>Section</StyledBoldData>
          <StyledBoldData>How to score</StyledBoldData>
          <StyledBoldData>Game</StyledBoldData>
        </StyledHead>

        <tbody>
          <StyledRow locked={aces !== 0}>
            <StyledBoldData>Aces</StyledBoldData>
            <StyledData>Count and add only Aces</StyledData>
            <StyledData>
              <NumberInput state={aces} setState={setAces} step={1} />
              <StepperButton
                state={aces}
                setState={setAces}
                step={1}
                dir={"up"}
              />
              <StepperButton
                state={aces}
                setState={setAces}
                step={1}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={twos !== 0}>
            <StyledBoldData>Twos</StyledBoldData>
            <StyledData>Count and add only Twos</StyledData>
            <StyledData>
              <NumberInput state={twos} setState={setTwos} step={2} />
              <StepperButton
                state={twos}
                setState={setTwos}
                step={2}
                dir={"up"}
              />
              <StepperButton
                state={twos}
                setState={setTwos}
                step={2}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={threes !== 0}>
            <StyledBoldData>Threes</StyledBoldData>
            <StyledData>Count and add only Threes</StyledData>
            <StyledData>
              <NumberInput state={threes} setState={setThrees} step={3} />
              <StepperButton
                state={threes}
                setState={setThrees}
                step={3}
                dir={"up"}
              />
              <StepperButton
                state={threes}
                setState={setThrees}
                step={3}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={fours !== 0}>
            <StyledBoldData>Fours</StyledBoldData>
            <StyledData>Count and add only Fours</StyledData>
            <StyledData>
              <NumberInput state={fours} setState={setFours} step={4} />
              <StepperButton
                state={fours}
                setState={setFours}
                step={4}
                dir={"up"}
              />
              <StepperButton
                state={fours}
                setState={setFours}
                step={4}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={fives !== 0}>
            <StyledBoldData>Fives</StyledBoldData>
            <StyledData>Count and add only Fives</StyledData>
            <StyledData>
              <NumberInput state={fives} setState={setFives} step={5} />
              <StepperButton
                state={fives}
                setState={setFives}
                step={5}
                dir={"up"}
              />
              <StepperButton
                state={fives}
                setState={setFives}
                step={5}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={sixes !== 0}>
            <StyledBoldData>Sixes</StyledBoldData>
            <StyledData>Count and add only Sixes</StyledData>
            <StyledData>
              <NumberInput state={sixes} setState={setSixes} step={6} />
              <StepperButton
                state={sixes}
                setState={setSixes}
                step={6}
                dir={"up"}
              />
              <StepperButton
                state={sixes}
                setState={setSixes}
                step={6}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledBoldData>Total Score</StyledBoldData>
            <StyledData>
              <img src={arrow} />
            </StyledData>
            <StyledBoldData>{sumSolos()}</StyledBoldData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledBoldData>
              BONUS{" "}
              <StyledSpan>
                <br />
                (if score 63 or higher)
              </StyledSpan>
            </StyledBoldData>
            <StyledData>Score 35</StyledData>
            <StyledBoldData>{bonus}</StyledBoldData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledBoldData>
              Total&nbsp;
              <StyledSpan>(Upper)</StyledSpan>
            </StyledBoldData>
            <StyledData>
              <img src={arrow} />
            </StyledData>
            <StyledBoldData>{sumSolos() + bonus}</StyledBoldData>
          </StyledRow>
        </tbody>
      </StyledTable>
      <StyledTable>
        <StyledHead>
          <StyledBoldData>Lower Section</StyledBoldData>
          <StyledBoldData>How to Score</StyledBoldData>
          <StyledBoldData>Game</StyledBoldData>
        </StyledHead>
        <tbody>
          <StyledRow locked={threeOfAKind !== 0}>
            <StyledBoldData>3 of a kind</StyledBoldData>
            <StyledData>Add total of all dice</StyledData>
            <StyledData>
              <NumberInput
                state={threeOfAKind}
                setState={setThreeOfAKind}
                step={1}
              />
              <StepperButton
                state={threeOfAKind}
                setState={setThreeOfAKind}
                step={1}
                dir={"up"}
              />
              <StepperButton
                state={threeOfAKind}
                setState={setThreeOfAKind}
                step={1}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={fourOfAKind !== 0}>
            <StyledBoldData>4 of a kind</StyledBoldData>
            <StyledData>Add total of all dice</StyledData>
            <StyledData>
              <NumberInput
                state={fourOfAKind}
                setState={setFourOfAKind}
                step={1}
              />
              <StepperButton
                state={fourOfAKind}
                setState={setFourOfAKind}
                step={1}
                dir={"up"}
              />
              <StepperButton
                state={fourOfAKind}
                setState={setFourOfAKind}
                step={1}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow
            locked={fullHouse || lockedFullHouse}
            onClick={() => setLockedFullHouse(!lockedFullHouse)}
          >
            <StyledBoldData>Full House</StyledBoldData>
            <StyledData>Score 25</StyledData>
            <StyledData>
              <Checkbox state={fullHouse} setState={setFullHouse} />
            </StyledData>
          </StyledRow>
          <StyledRow
            locked={smStraight || lockedSmStraight}
            onClick={() => setLockedSmStraight(!lockedSmStraight)}
          >
            <StyledBoldData>
              Sm. Straight{" "}
              <StyledSpan>
                <br />
                (Sequence of 4)
              </StyledSpan>
            </StyledBoldData>
            <StyledData>Score 30</StyledData>
            <StyledData>
              <Checkbox state={smStraight} setState={setSmStraight} />
            </StyledData>
          </StyledRow>
          <StyledRow
            locked={lgStraight || lockedLgStraight}
            onClick={() => setLockedLgStraight(!lockedLgStraight)}
          >
            <StyledBoldData>
              Large Straight{" "}
              <StyledSpan>
                <br />
                (Sequence of 5)
              </StyledSpan>
            </StyledBoldData>
            <StyledData>Score 40</StyledData>
            <StyledData>
              <Checkbox state={lgStraight} setState={setLgStraight} />
            </StyledData>
          </StyledRow>
          <StyledRow
            locked={whoopzee || lockedWhoopzee}
            onClick={() => setLockedWhoopzee(!lockedWhoopzee)}
          >
            <StyledBoldData>WHOOPZEE</StyledBoldData>
            <StyledData>Score 50</StyledData>
            <StyledData>
              <Checkbox state={whoopzee} setState={setWhoopzee} />
            </StyledData>
          </StyledRow>
          <StyledRow locked={chance !== 0}>
            <StyledBoldData>Chance</StyledBoldData>
            <StyledData>Add total of all dice</StyledData>
            <StyledData>
              <NumberInput state={chance} setState={setChance} step={1} />
              <StepperButton
                state={chance}
                setState={setChance}
                step={1}
                dir={"up"}
              />
              <StepperButton
                state={chance}
                setState={setChance}
                step={1}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledBoldData>Whoopzee Bonus</StyledBoldData>
            <StyledData>1 for each bonus</StyledData>
            <StyledData>
              <NumberInput
                state={whoopzeeBonus}
                setState={setWhoopzeeBonus}
                step={1}
              />
              <StepperButton
                state={whoopzeeBonus}
                setState={setWhoopzeeBonus}
                step={1}
                dir={"up"}
              />
              <StepperButton
                state={whoopzeeBonus}
                setState={setWhoopzeeBonus}
                step={1}
                dir={"down"}
              />
            </StyledData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledBoldData>
              Total&nbsp;
              <StyledSpan>(Lower)</StyledSpan>
            </StyledBoldData>
            <StyledData>
              <img src={arrow} />
            </StyledData>
            <StyledBoldData>{sumBottom()}</StyledBoldData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledBoldData>
              Total&nbsp;
              <StyledSpan>(Upper)</StyledSpan>
            </StyledBoldData>
            <StyledData>
              <img src={arrow} />
            </StyledData>
            <StyledBoldData>{sumUpper()}</StyledBoldData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledBoldData>Grand Total</StyledBoldData>
            <StyledData>
              <img src={arrow} />
            </StyledData>
            <StyledBoldData>{sumTotal()}</StyledBoldData>
          </StyledRow>
          <StyledRow locked={false}>
            <StyledData colSpan={3} style={{ justifyContent: "center" }}>
              <Button onClick={newGame}>New Game</Button>
            </StyledData>
          </StyledRow>
        </tbody>
      </StyledTable>
    </>
  );
}

export default Scorecard;
