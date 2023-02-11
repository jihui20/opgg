import styled, { css } from 'styled-components';
import IcoUnranked from 'assets/images/ico_unranked.png';

const Rank = ({ data }) => {
  const { title, position, totalGame, rank, lp, win, lose, winningRate } = data;

  return (
    <RankBox>
      <RankThumb rank={rank}>
        <img src={IcoUnranked} alt="솔로 랭크 이미지" />
      </RankThumb>
      <RankInfo>
        <p>
          <em>{title}</em>
        </p>
        {!rank ? (
          <p className="unranked">Unranked</p>
        ) : (
          <>
            <p>
              <span>
                <strong>{position}</strong> (총 {totalGame} 게임)
              </span>
            </p>
            <p>
              <strong>{rank}</strong>
            </p>
            <p>
              <span>
                <strong>{lp} LP</strong> / {win}승 {lose}패
              </span>
            </p>
            <p>승률 {winningRate}%</p>
          </>
        )}
      </RankInfo>
    </RankBox>
  );
};

export default Rank;

const RankBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
  padding: 10px 8px;
  background-color: #fff;
  border: 1px solid #cdd2d2;
  box-sizing: border-box;
`;

const RankThumb = styled.div`
  flex: 0 0 104px;
  text-align: center;

  img {
    ${(props) =>
      !props.rank
        ? css`
            width: 64px;
            height: 64px;
          `
        : css`
            width: 104px;
            height: 104px;
          `}
  }
`;

const RankInfo = styled.div`
  flex: 0 0 130px;
  margin-left: 13px;
  box-sizing: border-box;

  p {
    font-size: 12px;
    color: #879292;

    + p {
      margin-top: 4px;
    }

    &.unranked {
      font-weight: 800;
      font-size: 13px;
    }

    em {
      font-size: 11px;
    }

    span {
      font-size: 12px;

      strong {
        font-weight: 800;
        font-size: 12px;
        color: #353a3a;
      }
    }

    strong {
      font-weight: 800;
      font-size: 15px;
      color: #1f8ecd;
    }
  }
`;
