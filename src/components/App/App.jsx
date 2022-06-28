import { Profile } from 'components/Profile/Profile';

import { Statistics } from 'components/Statistics/Statistics';
import dataStatistics from 'components/data/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import dataFriends from 'components/data/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import dataTransations from 'components/data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" stats={dataStatistics} />
      <FriendList friends={dataFriends} />
      <TransactionHistory transactions={dataTransations} />
    </>
  );
};
