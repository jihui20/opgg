import styled from 'styled-components';

const Champions = () => {
  return (
    <MatchChampionsLayout>
      <p>Champions</p>
    </MatchChampionsLayout>
  );
};

export default Champions;

const MatchChampionsLayout = styled.div`
  flex: 0 0 auto;
  width: 228px;
  border: 1px solid orange;
  box-sizing: border-box;
`;
