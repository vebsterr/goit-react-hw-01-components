import styled from '@emotion/styled';

export const StyledStatistics = styled.section`
  width: 50%;
  margin: 50px auto 50px auto;

  border: 2px solid #000;
  border-radius: 10px;
  background-color: #d3edff;

  text-align: center;
`;

export const StyledList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0;
  border-top: 1px solid;
  border-bottom: 1px solid;

  & li:not(:last-child) {
    border-right: 1px solid #000;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #${p => p.color};
  flex: 1;
`;

export const StyledLabel = styled.span`
  font-size: 13px;
  font-weight: 300;
`;

export const StyledPercentage = styled.span`
  padding-top: 10px;
  font-size: 15px;
  font-weight: 500;
  padding-bottom: 10px;
`;
