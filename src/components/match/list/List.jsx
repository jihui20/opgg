import styled from 'styled-components';
import Champions from './Champions';
import Positions from './Positions';
import Summary from './Summary';

const List = ({ isMatchListData }) => {
  const { champions, positions, summary } = isMatchListData;

  return (
    <MatchListLayout>
      <Summary data={summary} />
      <Champions data={champions} />
      <Positions data={positions} />
    </MatchListLayout>
  );
};

export default List;

const MatchListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 158px;
  border: 1px solid #cdd2d2;
`;
