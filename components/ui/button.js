import Link from "next/Link";

import classes from "./button.module.css";

const Button = (props) => {
  const { children, link, onClick } = props;

  return link ? (
    <Link href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  ) : (
    <button className={classes.btn} onClick={onClick}>{children}</button>
  );
};

export default Button;
