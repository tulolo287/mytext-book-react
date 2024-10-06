import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

export const Header = () => {
  const navs = [
    { title: "Home", path: "/" },
    { title: "Catalog", path: "/catalog/page/1" },
  ];
  return (
    <div className={styles.header}>
      <nav>
        {navs.map((item) => (
          <NavLink to={item.path}>{item.title}</NavLink>
        ))}
      </nav>
    </div>
  );
};
