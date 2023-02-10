import styled from 'styled-components';
import PreviousTiers from './PreviousTiers';

const Summoner = ({ summonerData }) => {
  const { previousTiers } = summonerData;

  return (
    <>
      <PreviousTiers previousTiers={previousTiers} />
      <SummonerBox>
        <SummonerThumb>
          <i
            className="thumb"
            style={{ backgroundImage: `url(${summonerData.profileImageUrl})` }}
          ></i>
          <p className="blind">{summonerData.name}</p>
        </SummonerThumb>
        <SummonerInfo>
          <p className="summoner-name">{summonerData.name}</p>
          {summonerData?.ladderRank && (
            <p>
              레더 랭킹 <span>{summonerData?.ladderRank?.rank}</span>위 (상위
              {summonerData?.ladderRank?.rankPercentOfTop}%)
            </p>
          )}
        </SummonerInfo>
      </SummonerBox>
    </>
  );
};

export default Summoner;

const SummonerBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
`;

const SummonerThumb = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: 120px;
  height: auto;
  margin-right: 17px;
  padding-bottom: 120px;
  background-color: #eee;
  overflow: hidden;

  .thumb {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: cover;
  }

  .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

const SummonerInfo = styled.div`
  flex: 0 0 auto;
  margin-top: 11px;

  p {
    font-size: 11px;
    color: #657070;

    &.summoner-name {
      margin-bottom: 4px;
      font-weight: 800;
      font-size: 20px;
      color: #000;
    }

    span {
      font-weight: 800;
    }
  }
`;
