import React from 'react';
import clsx from 'clsx';
import css from './FriendList.module.css';


function FriendListItem({ avatar, name, isOnline }) {
    return (
        <div className={css.item}>
            <img src={avatar} alt={`${name} avatar`} width="48" />
            <p className={css.pName}>{name}</p>
            <p className={clsx(isOnline ? css.isOnline : css.isNotOnline)}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}


export const FriendList = ({ friends }) => {
    return (
        <div className={css.mainContainerFriend}>
            <ul className={css.listItem}>
                {friends.map((friend) => (
                    <li key={friend.id} className={css.liItem}>
                        <FriendListItem
                            avatar={friend.avatar}
                            name={friend.name}
                            isOnline={friend.isOnline}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default FriendList;

export { FriendListItem };


