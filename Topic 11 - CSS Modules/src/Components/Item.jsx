import styles from "./Items.module.css";

const Item = (props) => {
    let {foodItem} = props
    return (
        <li className= {`${styles["elements"]}`}>
            <span className={`${styles["span-items"]}`}>{foodItem}</span>
        </li>
    );
}
export default Item;


