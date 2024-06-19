
import css from "./FriendList.module.css"
import clsx from "clsx";


export default function FriendList({ item }) {
    const { avatar, name, isOnline } = item;
    return (
        <div className={css.item}>
            <img src={avatar} alt={`${name} avatar`} width="48" />
            <p className={css.pName}>{name}</p>
            <p className={clsx(isOnline ? css.isOnline : css.isNotOnline)}>
                {isOnline ? "Online" : "Offline"}
            </p>


            <div className={css.mainContainerFriend}>
                <ul className={css.listItem}>
                    {friends.map((friend) => {
                        return (
                            <li key={friend.id} className={css.liItem}>
                                <FriendList item={friend} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>


    );
}


