import { useState } from 'react';
import styled from 'styled-components';

const Tab = () => {
  // CHAMPION, WEEK
  const [isActiveTab, setIsActiveTab] = useState('CHAMPION');

  const onClickHandler = (currentTab) => {
    setIsActiveTab(currentTab);
  };

  return (
    <TabLayout>
      <ul>
        <li className={isActiveTab === 'CHAMPION' ? 'active' : ''}>
          <button type="button" onClick={() => onClickHandler('CHAMPION')}>
            <span>챔피언 승률</span>
          </button>
        </li>
        <li className={isActiveTab === 'WEEK' ? 'active' : ''}>
          <button type="button" onClick={() => onClickHandler('WEEK')}>
            <span>7일간 랭크 승률</span>
          </button>
        </li>
      </ul>
    </TabLayout>
  );
};

export default Tab;

const TabLayout = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      flex: 0 0 50%;
      border-width: 0 0 1px 0;
      border-style: solid;
      border-color: #cdd2d2;
      box-sizing: border-box;
      background-color: #f2f2f2;

      + li {
        border-left-width: 1px;
      }

      &.active {
        background-color: #ededed;
        border-bottom: none;

        button {
          font-weight: 800;
          color: #5e5e5e;
        }
      }

      button {
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 12px;
        color: #879292;
        text-align: center;
      }
    }
  }
`;
