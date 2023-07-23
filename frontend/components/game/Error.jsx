import {useSelector} from "react-redux";
import classes from "./UI/Error.module.css";

export default function Error() {
    return (
        <>
            <div className={classes.text}>
                В данный момент сервис не доступен
            </div>
        </>
    )
}