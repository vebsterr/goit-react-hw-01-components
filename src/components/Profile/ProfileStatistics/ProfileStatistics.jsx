import PropTypes from 'prop-types';
import {
  StyledMetaList,
  StyledMetaTitle,
  StyledProfileStatistics,
} from './ProfileStatistics.styled';

export const ProfileStatistics = ({ followers, views, likes }) => {
  return (
    <StyledMetaList>
      <li>
        <StyledMetaTitle>Followers</StyledMetaTitle>
        <StyledProfileStatistics>{followers}</StyledProfileStatistics>
      </li>
      <li>
        <StyledMetaTitle>Views</StyledMetaTitle>
        <StyledProfileStatistics>{views}</StyledProfileStatistics>
      </li>
      <li>
        <StyledMetaTitle>Likes</StyledMetaTitle>
        <StyledProfileStatistics>{likes}</StyledProfileStatistics>
      </li>
    </StyledMetaList>
  );
};

ProfileStatistics.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
