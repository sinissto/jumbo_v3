import classes from './ProfileMenuModal.module.css'

const ProfileMenuModal = (props) => {
    return (
        <div className={classes.profile_card_menu_modal}>
            <div onClick={props.onClose} className={classes.backdrop} />
            <div className={classes.profile_card_modal}>
                <ul className={classes.profile_card_ulist}>
                    <li>
                        <a
                            onClick={props.onClose}
                            className={classes.profile_card_manu_link}
                            href="#"
                        >
                            View Profile
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={props.onClose}
                            className={classes.profile_card_manu_link}
                            href="#"
                        >
                            Send Message
                        </a>
                    </li>
                    <li>
                        <a
                            onClick={props.onClose}
                            className={classes.profile_card_manu_link}
                            href="#"
                        >
                            Add to Favorite
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileMenuModal
