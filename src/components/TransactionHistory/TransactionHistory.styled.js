import styled from '@emotion/styled';

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 80%;
  border-collapse: collapse;
  border: 2px solid #000;
  border-radius: 10px;

  border-collapse: collapse;

  margin: 50px auto 50px auto;

  thead th:nth-of-type(1) {
    width: 30%;
  }

  thead th:nth-of-type(2) {
    width: 20%;
  }

  thead th:nth-of-type(3) {
    width: 15%;
  }

  th {
    padding: 20px;
  }

  th {
    letter-spacing: 2px;
  }

  tbody td {
    text-align: center;
  }

  thead {
    background-color: #00345f;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  thead th {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.5)
    );
    border: 2px solid #000;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #d3edff;
  }

  tbody tr:nth-of-type(even) {
    background-color: #b3dfff;
  }
`;
