import userData from 'components/data/user.json';

import { ProfileHead } from 'components/ProfileHead/ProfileHead';
import { MetaInfo } from 'components/MetaInfo/MetaInfo';

import { StyledProfile } from './Profile.styled';

export const Profile = () => {
  return (
    <StyledProfile>
      <ProfileHead
        location={userData.location}
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
      />
      <MetaInfo
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </StyledProfile>
  );
};
