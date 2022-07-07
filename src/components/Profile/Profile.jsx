import { ProfileHead } from 'components/Profile/ProfileHead/ProfileHead';
import { ProfileStatistics } from 'components/Profile/ProfileStatistics/ProfileStatistics';

import { StyledProfile } from './Profile.styled';

export const Profile = ({ location, avatar, username, tag, stats }) => {
  return (
    <StyledProfile>
      <ProfileHead
        location={location}
        avatar={avatar}
        username={username}
        tag={tag}
      />
      <ProfileStatistics
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </StyledProfile>
  );
};
