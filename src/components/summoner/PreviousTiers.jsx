import styled from 'styled-components';

const PreviousTiers = ({ previousTiers }) => {
  return (
    <TiersBox>
      {previousTiers &&
        previousTiers.map((item, index) => {
          return (
            <li key={`${item.name}-${index}`}>
              <span>{item.season}</span>
              {item.tier}
            </li>
          );
        })}
    </TiersBox>
  );
};

export default PreviousTiers;

const TiersBox = styled.ul`
  li {
    display: inline-block;
    min-width: 58px;
    height: 20px;
    padding: 4px 5px;
    font-size: 11px;
    color: #657070;
    background-color: #e0e3e3;
    border: 1px solid #d0d3d4;
    border-radius: 2px;
    text-align: center;
    line-height: 20px;

    span {
      font-weight: 800;
      padding-right: 3px;
    }

    + li {
      margin-left: 7px;
    }
  }
`;
