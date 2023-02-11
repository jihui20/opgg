import styled from 'styled-components';

const SideRight = () => {
  return (
    <SideRightLayout>
      <p>오른쪽</p>
    </SideRightLayout>
  );
};

export default SideRight;

const SideRightLayout = styled.div`
  flex: 0 0 690px;
  background-color: skyblue;
`;
