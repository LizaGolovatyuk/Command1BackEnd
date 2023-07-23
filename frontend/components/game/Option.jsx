import {useDispatch, useSelector} from "react-redux";
import classes from "./UI/Option.module.css";
import {Actions} from "@/components/game/store";

export const OptionTypes = {
    Normal: "Normal",
    Correct: "Correct",
    Incorrect: "Incorrect",
    Undefined: undefined
}

function getClass(type) {
    switch (type) {
        case OptionTypes.Normal:
            return "";

        case OptionTypes.Correct:
            return classes.correctAnswer;

        case OptionTypes.Incorrect:
            return classes.incorrectAnswer;

        case OptionTypes.Undefined:
            return ""

        default:
            return ""
    }
}

export default function Option({type, blocked, value, onClick, ind}) {
    return (
        <>
            <button
                className={[
                    classes.option,
                    blocked ? classes.blocked : "",
                    getClass(type)
                ].join(' ')}
                onClick={onClick}
                ind={ind}
            >
                {value}
            </button>
        </>
    )
}