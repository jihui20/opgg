import { getKda } from 'common/calculation';
import styled, { css } from 'styled-components';

const Kda = ({ kills, assists, deaths, games, useText }) => {
  const kdaResult = getKda(kills, assists, deaths, games);

  return (
    <KdaLayout kdaResult={kdaResult}>
      {kdaResult}
      {useText && useText}
    </KdaLayout>
  );
};

export default Kda;

const KdaLayout = styled.strong`
  ${(props) => {
    if (props.kdaResult >= 5.0) {
      return css`
        color: #e19205 !important;
      `;
    } else if (props.ratingResult >= 4.0) {
      return css`
        color: #1f8ecd !important;
      `;
    } else if (props.ratingResult >= 3.0) {
      return css`
        color: #2daf7f !important;
      `;
    }
  }}
`;
