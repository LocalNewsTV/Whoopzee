import { useState } from "react";
import {
  StyledBoldData,
  StyledData,
  StyledHead,
  StyledRow,
  StyledTable,
} from "./scorecard.styles";
import Button from "../common/Button/Button.styles";
import CheckboxRow from "../CheckboxRow/CheckboxRow";
import InputRow from "../InputRow/InputRow";
import ScoreRow from "../ScoreRow/ScoreRow";

function Scorecard() {
  // Constants for Scores
  const FULL_HOUSE_VALUE = 25;
  const SM_STRAIGHT_VALUE = 30;
  const LG_STRAIGHT_VALUE = 40;
  const WHOOPZEE_VALUE = 50;
  const WHOOPZEE_BONUS = 100;
  const UPPER_BONUS_VALUE = 35;

  // States for upper section
  const [aces, setAces] = useState<number>(0);
  const [twos, setTwos] = useState<number>(0);
  const [threes, setThrees] = useState<number>(0);
  const [fours, setFours] = useState<number>(0);
  const [fives, setFives] = useState<number>(0);
  const [sixes, setSixes] = useState<number>(0);

  // States for Lower Section of Scorecard
  const [threeOfAKind, setThreeOfAKind] = useState<number>(0);
  const [fourOfAKind, setFourOfAKind] = useState<number>(0);
  const [fullHouse, setFullHouse] = useState<boolean>(false);
  const [smStraight, setSmStraight] = useState<boolean>(false);
  const [lgStraight, setLgStraight] = useState<boolean>(false);
  const [whoopzee, setWhoopzee] = useState<boolean>(false);
  const [chance, setChance] = useState<number>(0);
  const [whoopzeeBonus, setWhoopzeeBonus] = useState<number>(0);

  // Booleans States for Checkbox rows
  const [lockedFullHouse, setLockedFullHouse] = useState<boolean>(false);
  const [lockedSmStraight, setLockedSmStraight] = useState<boolean>(false);
  const [lockedLgStraight, setLockedLgStraight] = useState<boolean>(false);
  const [lockedWhoopzee, setLockedWhoopzee] = useState<boolean>(false);

  /**
   * @desc Sums all of the solo value boxes in the upper section
   * @returns Sum of the solos in upper section
   */
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

  // Score for if Bonus in Upper Section applies
  const bonus = sumSolos() >= 63 ? UPPER_BONUS_VALUE : 0;

  /**
   * @desc Sum upper section of scorecard and include bonus
   * @returns Sum of upper section
   */
  const sumUpper = (): number => sumSolos() + bonus;
  /**
   * @desc Tally all of the bottom sections scores, excluding negative numbers
   * @returns Sum of bottom section
   */
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
          <InputRow
            state={aces}
            setState={setAces}
            title={"Aces"}
            details="Count and add only Aces"
            step={1}
          />
          <InputRow
            state={twos}
            setState={setTwos}
            title={"Twos"}
            details="Count and add only Twos"
            step={2}
          />
          <InputRow
            state={threes}
            setState={setThrees}
            title={"Threes"}
            details="Count and add only Threes"
            step={3}
          />
          <InputRow
            state={fours}
            setState={setFours}
            title={"Fours"}
            details="Count and add only Fours"
            step={4}
          />
          <InputRow
            state={fives}
            setState={setFives}
            title={"Fives"}
            details="Count and add only Fives"
            step={5}
          />
          <InputRow
            state={sixes}
            setState={setSixes}
            title={"Sixes"}
            details="Count and add only Sixes"
            step={6}
          />
          <ScoreRow
            text={['Total Score']}
            score={sumSolos()}
          />
          <ScoreRow
            text={['BONUS', '(if score 63 or higher)', 'Score 35']}
            score={bonus}
          />
          <ScoreRow
            text={['Total', '(Upper)']}
            score={sumSolos() + bonus}
          />
        </tbody>
      </StyledTable>
      <StyledTable>
        <StyledHead>
          <StyledBoldData>Lower Section</StyledBoldData>
          <StyledBoldData>How to Score</StyledBoldData>
          <StyledBoldData>Game</StyledBoldData>
        </StyledHead>
        <tbody>
          <InputRow
            state={threeOfAKind}
            setState={setThreeOfAKind}
            title={"3 of a kind"}
            details={"Add total of all dice"}
            step={1}
          />
          <InputRow
            state={fourOfAKind}
            setState={setFourOfAKind}
            title={"4 of a kind"}
            details={"Add total of all dice"}
            step={1}
          />
          <CheckboxRow
            locked={fullHouse || lockedFullHouse}
            state={fullHouse}
            setState={setFullHouse}
            title={"Full House"}
            details={"Score 25"}
            lockedState={lockedFullHouse}
            setLockedAlt={setLockedFullHouse}
          />
          <CheckboxRow
            locked={smStraight || lockedSmStraight}
            state={smStraight}
            setState={setSmStraight}
            title={"Sm. Straight"}
            details={"Score 30"}
            lockedState={lockedSmStraight}
            setLockedAlt={setLockedSmStraight}
          />
          <CheckboxRow
            locked={lgStraight || lockedLgStraight}
            state={lgStraight}
            setState={setLgStraight}
            title={"Lg. Straight"}
            details={"Score 40"}
            lockedState={lockedLgStraight}
            setLockedAlt={setLockedLgStraight}
          />
          <CheckboxRow
            locked={whoopzee || lockedWhoopzee}
            state={whoopzee}
            setState={setWhoopzee}
            title={"Whoopzee"}
            details={"Score 50"}
            lockedState={lockedWhoopzee}
            setLockedAlt={setLockedWhoopzee}
          />
          <InputRow
            state={chance}
            setState={setChance}
            step={1}
            title={"Chance"}
            details={"Add total of all dice"}
          />
          <InputRow
            state={whoopzeeBonus}
            setState={setWhoopzeeBonus}
            step={1}
            title={"Whoopzee Bonus"}
            details={"1 for each bonus"}
          />
          <ScoreRow
            text={['Total', '(Lower)']}
            score={sumBottom()}
          />
          <ScoreRow
            text={['Total', '(Upper)']}
            score={sumUpper()}
          />
          <ScoreRow
            text={['Grand Total']}
            score={sumTotal()}
          />
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
