import { Profile } from 'components/Profile/Profile';
import userData from 'data/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import dataStatistics from 'data/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import dataFriends from 'data/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import dataTransations from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        location={userData.location}
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={dataFriends} />
      <TransactionHistory transactions={dataTransations} />
    </>
  );
};
