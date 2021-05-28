import { NavLink } from "react-router-dom";
import { styles } from "./styles";
import logo from "./Logo.png";
import merchants from "./users.svg";
import shop from "./Vector.svg";
import settings from "./Settings.svg";
import avatar from "./Avatar.png";

const activeMenuLinkStyles = {
  background: "rgba(255, 255, 255, 0.05)",
};

export const Menu = () => {
  return (
    <div css={styles.container}>
      <div css={styles.fixed}>
        <NavLink to="/">
          <div css={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
        <div css={styles.separator}></div>
        <NavLink activeStyle={activeMenuLinkStyles} to="/merchants">
          <div css={styles.iconContainer}>
            <div css={styles.icon}>
              <img src={merchants} alt="merchants" />
            </div>
          </div>
        </NavLink>
        <NavLink activeStyle={activeMenuLinkStyles} to="/shop">
          <div css={styles.iconContainer}>
            <div css={styles.icon}>
              <img src={shop} alt="shop" />
            </div>
          </div>
        </NavLink>
      </div>
      <div css={styles.fixedBottom}>
        <NavLink activeStyle={activeMenuLinkStyles} to="/settings">
          <div css={styles.iconContainer}>
            <div css={styles.icon}>
              <img src={settings} alt="settings" />
            </div>
          </div>
        </NavLink>
        <NavLink to="/profile">
          <div css={styles.avatar}>
            <img src={avatar} alt="avatar" />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
