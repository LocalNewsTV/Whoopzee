import { StyledBoldData, StyledData, StyledRow, StyledSpan } from "../Scorecard/scorecard.styles";
import arrow from '/arrow-right.svg';

type PropTypes = {
  text: string[];
  score: number;
}
function ScoreRow({text, score}: PropTypes) {
  const arrowImg = <img src={arrow} />
  return (
    <StyledRow locked={false}>
      <StyledBoldData>
        {text[0]}&nbsp;
        {text.length > 1 && <br/>}
        <StyledSpan>{text[1]}</StyledSpan>
      </StyledBoldData>
      <StyledData>
        {text.length > 2 ? text[2] : arrowImg}
      </StyledData>
      <StyledBoldData>{score}</StyledBoldData>
    </StyledRow>
  )
}

export default ScoreRow;
