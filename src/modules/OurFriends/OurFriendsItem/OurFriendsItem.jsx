import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendTitle,
  FriendImageThumb,
  FriendImg,
  FriendWrapper,
  FriendThumb,
  FriendInfoThumb,
  FriendInfoTitle,
  FriendInfoData,
  FriendAdress,
  WorkDaysList,
  WorkDays,
  WorkTime,
  WorkDayItem,
} from '../OurFriendsItem/OurFriendsItem.styled';

import noImage from '../../../images/noimage.jpg';

const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

const OurFriendsItem = ({ items, handleTimeHover, hoveredTime }) => {
  return items.map(item => (
    <FriendCard key={item.imageUrl}>
      <FriendTitle href={`${item.url}`} target="_blank">
        {item.title}
      </FriendTitle>
      <FriendThumb>
        <FriendImageThumb>
          <FriendImg src={item.imageUrl || noImage} alt="partner logo" />
        </FriendImageThumb>
        <FriendWrapper>
          <FriendInfoThumb
            onMouseEnter={() => handleTimeHover(item.imageUrl)}
            onMouseLeave={() => handleTimeHover('')}
          >
            <FriendInfoTitle>Time:</FriendInfoTitle>
            <FriendInfoData>
              {item.workDays
                ? item.workDays[0].isOpen
                  ? `${item.workDays[0].from} - ${item.workDays[0].to}`
                  : 'Close'
                : 'Day and Night'}
            </FriendInfoData>
          </FriendInfoThumb>
          <FriendInfoThumb>
            <FriendInfoTitle>Adress:</FriendInfoTitle>
            <FriendAdress
              href={item.addressUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.address === null ? 'Website only' : item.address}
            </FriendAdress>
          </FriendInfoThumb>
          <FriendInfoThumb>
            <FriendInfoTitle>Email:</FriendInfoTitle>
            <FriendInfoData href={`mailto:${item.email}`}>
              {item.email === null ? 'Telephone only' : item.email}
            </FriendInfoData>
          </FriendInfoThumb>
          <FriendInfoThumb>
            <FriendInfoTitle>Phone:</FriendInfoTitle>
            <FriendInfoData href={`tel:${item.phone}`}>
              {item.phone === null ? 'Email only' : item.phone}
            </FriendInfoData>
          </FriendInfoThumb>
        </FriendWrapper>
      </FriendThumb>
      {hoveredTime === item.imageUrl && (
        <WorkDaysList>
          {item.workDays
            ? item.workDays.map(
                (workDay, index) =>
                  workDay && (
                    <WorkDayItem key={index}>
                      <WorkDays>{weekDays[index]}: </WorkDays>
                      <WorkTime>
                        {workDay.isOpen
                          ? `${workDay.from} - ${workDay.to}`
                          : 'Closed'}
                      </WorkTime>
                    </WorkDayItem>
                  )
              )
            : 'Day and Night'}
        </WorkDaysList>
      )}
    </FriendCard>
  ));
};

export default OurFriendsItem;

OurFriendsItem.propTypes = {
  items: PropTypes.array.isRequired,
};