import PropTypes from 'prop-types';
import { StyledTd } from './Transaction.styled';
export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <StyledTd>{type}</StyledTd>
      <StyledTd>{amount}</StyledTd>
      <StyledTd>{currency}</StyledTd>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
