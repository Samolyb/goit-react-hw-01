import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
    return (
        <div className={css.container} >
            <div className={css.mainContainer}>
                <div className={css.containerProfile}>
                    <img
                        src={image}
                        alt="User avatar"
                        className={css.profileImg}
                    />
                    <p className={css.profilePrimaryParagraf}>{name}</p>
                    <p className={(
                        css.profilePrimaryParagraf,
                        css.profileSecondaryParagraf
                    )}>@{tag}</p>
                    <p className={(
                        css.profilePrimaryParagraf,
                        css.profileSecondaryParagraf
                    )}>{location}</p>
                </div>


                <ul className={css.listItem}>
                    <li className={css.item}>
                        <span className={(css.profilePrimaryParagraf, css.stats)}>Followers</span>
                        <span>{stats.followers}</span>
                    </li>
                    <li className={css.item}>
                        <span>Views</span>
                        <span>{stats.views}</span>
                    </li>
                    <li className={css.item}>
                        <span>Likes</span>
                        <span>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div >

    );


}








