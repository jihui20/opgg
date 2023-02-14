import styled, { css } from 'styled-components';
import IcoTop from 'assets/images/ico_position_top.png';
import IcoMiddle from 'assets/images/ico_position_middle.png';
import IcoBottom from 'assets/images/ico_position_bottom.png';
import IcoSupport from 'assets/images/ico_position_support.png';
import IcoJungle from 'assets/images/ico_position_jungle.png';

const Positions = ({ data }) => {
  return (
    <MatchPositionsLayout>
      <p>선호 포지션 (랭크)</p>
      {data?.length > 0 ? (
        data.map((item, index) => {
          return (
            <div key={`${item.position}-${index}`}>
              <PositionTumb position={item.position}>
                <span></span>
              </PositionTumb>
              <PositionInfo>
                <p className="position-name">{item.positionName}</p>
                <p>
                  <strong>70%</strong>
                  <span>
                    승률 <strong>33</strong>%
                  </span>
                </p>
              </PositionInfo>
            </div>
          );
        })
      ) : (
        <p>선호 포지션이 없습니다.</p>
      )}
    </MatchPositionsLayout>
  );
};

export default Positions;

const MatchPositionsLayout = styled.div`
  flex: 0 0 auto;
  width: 184px;
  height: 100%;
  padding: 16px;
  border-left: 1px solid #cdd2d2;
  box-sizing: border-box;

  > p {
    margin-bottom: 20px;
    font-size: 12px;
    color: #666;
  }

  > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    + div {
      margin-top: 24px;
    }
  }
`;

const PositionTumb = styled.div`
  flex: 0 0 auto;
  margin-right: 8px;

  span {
    display: block;
    width: 28px;
    height: 28px;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 100% auto;
    overflow: hidden;

    ${(props) => {
      if (props.position === 'TOP') {
        return css`
          background-image: url(${IcoTop});
        `;
      } else if (props.position === 'MID') {
        return css`
          background-image: url(${IcoMiddle});
        `;
      } else if (props.position === 'JNG') {
        return css`
          background-image: url(${IcoJungle});
        `;
      } else if (props.position === 'SUP') {
        return css`
          background-image: url(${IcoSupport});
        `;
      } else if (props.position === 'ADC') {
        return css`
          background-image: url(${IcoBottom});
        `;
      } else {
        return css`
          background-color: #555;
          background-image: none;
        `;
      }
    }}
  }
`;

const PositionInfo = styled.div`
  flex: 0 0 auto;

  p {
    font-size: 11px;
    color: #555;

    &.position-name {
      margin-bottom: 3px;
      font-size: 14px;
      color: #333;
    }
  }

  span {
    &::before {
      content: '';
      display: inline-block;
      width: 1px;
      height: 11px;
      margin: 0 6px;
      background-color: #cdd2d2;
    }
  }
`;
