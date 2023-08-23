import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFriends } from '../../redux/friends/friends-operations';
import OurFriendsList from '../../modules/OurFriends/OurFriendsList/OurFriendsList';
import Loader from '../../shared/components/Loader/Loader';
import css from './OurFriendsPage.module.css';

const OurFriendsPage = () => {
  const { isLoading } = useSelector(state => state.friends);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
      <div className="container">
        <h2 className={css.title}>Our friends</h2>
        {isLoading && <Loader />}
        <OurFriendsList />
      </div>
  );
};

export default OurFriendsPage;
