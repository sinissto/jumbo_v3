import Card from '../../components/HelpersComponents/Card/Card'
import profile_pic from '../../img/avatar3.jpeg'
import badge from '../../img/badge.png'
import classes from './Profile.module.css'
import { useState } from 'react'
import ProfileMenuModal from './ProfileMenuModal'

const Profile = () => {
    const [isMenuBtnClicked, setIsMenuBtnClicked] = useState(false)

    const menuBtnHandler = (event) => {
        setIsMenuBtnClicked(true)
    }

    const onCloseProfileManu = () => {
        setIsMenuBtnClicked(false)
    }

    return (
        <Card>
            {/*Ceo DIV u CARD*/}
            <div className={classes.card_div}>
                {/*Ikonica absolutno pozicionirana*/}
                <div className={classes.profile_card_menu}>
                    {!isMenuBtnClicked && (
                        <button
                            onClick={menuBtnHandler}
                            className={classes['profile_card_menu--btn']}
                        >
                            <span className="material-icons">more_vert</span>
                        </button>
                    )}
                    {isMenuBtnClicked && (
                        <ProfileMenuModal onClose={onCloseProfileManu} />
                    )}
                </div>

                {/*Gornji DIV (strana kartice)*/}
                <div className={classes.profile_name_and_photo}>
                    <div className={classes.profile_photo_and_badge}>
                        <img
                            className={classes.profile_photo}
                            src={profile_pic}
                        />
                        <img className={classes.badge} src={badge} />
                    </div>
                    <div className={classes.profile_name_role}>
                        <strong>John Doe</strong>
                        <p>General Manager</p>
                    </div>
                </div>

                {/*Donji DIV (strana kartice)*/}
                <div className={classes.profile_data_container}>
                    <div className={classes.profile_data}>
                        <div className={classes.profile_numbers}>
                            <h4>Folowers</h4>
                            <strong>457</strong>
                        </div>
                        <div className={classes.profile_numbers}>
                            <h4>Courses</h4>
                            <strong>12</strong>
                        </div>
                        <div className={classes.profile_numbers}>
                            <h4>Folowing</h4>
                            <strong>697</strong>
                        </div>
                    </div>

                    <div className={classes.profile_message}>
                        <div className={classes.profile_message_text}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Commodi culpa cumque dicta
                                dignissimos dolore doloribus
                            </p>
                        </div>
                        <div className={classes.profile_message_btn}>
                            <button
                                className={classes.profile_send_message_btn}
                            >
                                <span className="material-icons">send</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Profile
