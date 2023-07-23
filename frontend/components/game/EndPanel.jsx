import classes from "./UI/EndPanel.module.css"
import {useSelector} from "react-redux";
import {MaxCountRounds} from "./store"

export default function EndPanel() {
    const count = useSelector(state => state.score)
    return (
        <>
            <div class={classes.wrapper}>
                <div className={classes.title}>
                    Конец игры
                </div>
                <div className={classes.scoreCont}>
                    <img className={classes.image} src="big-feather.png"/>
                    <div className={classes.score}>+{count}</div>
                </div>
                <div className={classes.subTitle}>
                    Вы узнали <span className={classes.number}>{count} </span>
                    птиц из <span className={classes.number}>{MaxCountRounds}</span>
                </div>
            </div>
        </>
    )
}