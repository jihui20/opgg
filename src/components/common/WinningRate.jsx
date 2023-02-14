import styled, { css } from 'styled-components';
import { getWinningRate } from 'common/calculation';

const WinningRate = ({ wins, games }) => {
  const winningRateResult = getWinningRate(wins, games);

  return (
    <AverageLayout winningRateResult={winningRateResult}>
      {winningRateResult}%
    </AverageLayout>
  );
};

export default WinningRate;

const AverageLayout = styled.strong`
  ${(props) => {
    if (props.winningRateResult >= 60) {
      return css`
        color: #c6443e !important;
      `;
    }
  }}
`;
