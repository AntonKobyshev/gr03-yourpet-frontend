import { useState } from 'react';
import PropTypes from 'prop-types';
import OurFriendsItem from '../../OurFriends/OurFriendsItem/OurFriendsItem';
import { FriendsList } from '../OurFriendsList/OurFriendsList.styled';

export const OurFriendsList = ({ items }) => {
  const [hoveredTime, setHoveredTime] = useState('');
  if (items.length > 9) {
    items.length = 9;
  }
  const handleTimeHover = index => {
    setHoveredTime(index);
  };

  return (
      <FriendsList>
        <OurFriendsItem
          items={items}
          handleTimeHover={handleTimeHover}
          hoveredTime={hoveredTime}
        />
      </FriendsList>
  );
};

OurFriendsList.propTypes = {
  items: PropTypes.array.isRequired,
};