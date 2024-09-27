import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.image} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
