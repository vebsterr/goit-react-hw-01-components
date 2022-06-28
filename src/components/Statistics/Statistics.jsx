import PropTypes from 'prop-types';

import {
  StyledStatistics,
  StyledList,
  StyledItem,
  StyledLabel,
  StyledPercentage,
} from './Statistics.styled';

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

export const Statistics = ({ stats, title }) => {
  return (
    <StyledStatistics>
      {title && <h2>{title}</h2>}
      <StyledList>
        {stats.map(el => {
          return (
            <StyledItem key={el.id} color={randomColor()}>
              <StyledLabel>{el.label} </StyledLabel>
              <StyledPercentage>{el.percentage}</StyledPercentage>
            </StyledItem>
          );
        })}
      </StyledList>
    </StyledStatistics>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
