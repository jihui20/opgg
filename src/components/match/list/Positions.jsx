import styled from 'styled-components';

const Positions = () => {
  return (
    <MatchPositionsLayout>
      <p>Positions</p>
    </MatchPositionsLayout>
  );
};

export default Positions;

const MatchPositionsLayout = styled.div`
  flex: 0 0 auto;
  width: 184px;
  border: 1px solid orange;
  box-sizing: border-box;
`;
