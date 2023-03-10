import styled from 'styled-components';

const Tab = ({ isActiveTab, getActiveTab = () => {} }) => {
  return (
    <TabLayout>
      <ul>
        <li className={isActiveTab === 'total' ? 'active' : ''}>
          <button type="button" onClick={() => getActiveTab('total')}>
            <span>전체</span>
          </button>
        </li>
        <li className={isActiveTab === 'soloranked' ? 'active' : ''}>
          <button type="button" onClick={() => getActiveTab('soloranked')}>
            <span>솔로게임</span>
          </button>
        </li>
        <li className={isActiveTab === 'flexranked' ? 'active' : ''}>
          <button type="button" onClick={() => getActiveTab('flexranked')}>
            <span>자유랭크</span>
          </button>
        </li>
      </ul>
    </TabLayout>
  );
};

export default Tab;

const TabLayout = styled.div`
  background-color: #f2f2f2;

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 16px;
    border: 1px solid #cdd2d2;
    border-bottom: none;

    li {
      flex: 0 0 auto;
      box-sizing: border-box;
      background-color: #f2f2f2;
      border-bottom: 2px solid #f2f2f2;

      + li {
        margin-left: 24px;
      }

      &.active {
        color: #1f8ecd;
        border-bottom: 2px solid #1f8ecd;

        button {
          font-weight: 800;
          color: #1f8ecd;
        }
      }

      button {
        display: block;
        width: 100%;
        padding: 15px 0;
        font-size: 12px;
        color: #555555;
        text-align: center;
      }
    }
  }
`;
