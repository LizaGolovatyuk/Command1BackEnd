import classes from './UI/RoundIndicator.module.css'
import {useDispatch} from "react-redux";
import {Actions} from "@/components/game/store";

export const IndicatorTypes = {
    Correct: "Correct",
    Incorrect: "Incorrect",
    Current: "Current",
    Disabled: "Disabled",
    Undefined: undefined
}

export default function RoundIndicator({type, ind}) {
    let birdClass, markerClass;
    const dispatch = useDispatch();
    switch (type) {
        case IndicatorTypes.Correct:
            [birdClass, markerClass] = [classes.birdCorrect, classes.markerCorrect]
            break;

        case IndicatorTypes.Incorrect:
            [birdClass, markerClass] = [classes.birdIncorrect, classes.markerIncorrect]
            break;

        case IndicatorTypes.Current:
            [birdClass, markerClass] = [classes.birdCurrent, classes.markerCurrent]
            break;

        case IndicatorTypes.Disabled:
            [birdClass, markerClass] = [classes.birdDisabled, classes.markerDisabled]
            break;

        default:
            [birdClass, markerClass] = [classes.birdCurrent, classes.markerCurrent]
    }
    return (
        <>
            <div className={classes.card}>
                <div
                    className={[classes.bird, birdClass].join(' ')}
                    onClick={() => dispatch({type: Actions.SetViewRound, payload: ind})}
                ></div>
                <div className={[classes.marker, markerClass].join(' ')}></div>
            </div>
        </>
    )
}