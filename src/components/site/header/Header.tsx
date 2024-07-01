import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <ul className={styles.header_list}>
               <li className={styles.list_item}>Каталог</li>
                <li className={styles.list_item}>Личный кабинет</li>
            </ul>
        </div>
    )
}

export default Header;