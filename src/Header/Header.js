import classes from "./Header.module.css";
import logo from "../img/logo-white.png";
import flag from "../img/icons8-usa.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_container}>
        <div className={classes.header_left}>
          <div>
            <button type="button">
              <span className={`material-icons ${classes.icon}`}> menu </span>
            </button>
          </div>

          <div>
            <a href="https://google.com">
              <img src={logo} alt="Jumbo logo" />
            </a>
          </div>
        </div>

        <div className={classes.header_right}>
          <div className={classes.input_field}>
            <button>
              <span className={`material-icons ${classes.icon}`}> search </span>
            </button>

            <input type="text" placeholder="Search here..." />
          </div>

          <div>
            <button>
              <span
                className={`material-icons ${classes.icon} ${classes.icon_hov}`}
              >
                {" "}
                apps{" "}
              </span>
            </button>
          </div>

          <div>
            <button>
              <span
                className={`material-icons ${classes.icon} ${classes.icon_hov}`}
              >
                {" "}
                chat{" "}
              </span>
            </button>
          </div>

          <div>
            <button>
              <span
                className={`material-icons ${classes.icon} ${classes.icon_hov}`}
              >
                {" "}
                notifications{" "}
              </span>
            </button>
          </div>

          <div className={classes.flag_div}>
            <button className={classes.flag_btn} type="button">
              <span className={classes.flag}>
                <img src={flag} alt="" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
