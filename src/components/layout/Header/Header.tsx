import Link from 'next/link';
import styles from './Header.module.scss';
import { MENU } from './header.data';

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo_container}>
					<Link className={styles.logo} href="/">
						Логотип
					</Link>
				</div>
				<ul className={styles.menuList}>
					{MENU.map((item) => (
						<li className={styles.menuItem} key={item.url}>
							<Link href={item.url}>{item.name}</Link>
						</li>
					))}
				</ul>
				<button className={styles.button}>Связаться по телефону</button>
			</div>
		</header>
	);
};

export default Header;
