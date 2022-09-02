import styles from "../css/Searchbar.module.css"

export default function Searchbar({onSubmit}){
    
    return(
    <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={styles["SearchForm-button"]}>
            <span className={styles["SearchForm-button-label"]}>Search</span>
        </button>
    
        <input
            className={styles["SearchForm-input"]}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
        />
        </form>
    </header>)
}