import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href={"/"}>Foodino</Link>

        <ul>
          <li>
            {" "}
            <Link href={"/menu"}>Menu</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={"/categories"}>Categories</Link>{" "}
          </li>
        </ul>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noreferrer" >
            Foodino
        </a>
        Next.js Course | Foodino project &copy;
      </footer>
    </>
  );
};

export default Layout;
