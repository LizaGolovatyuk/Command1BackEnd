import {useDispatch, useSelector} from "react-redux";
import classes from "./UI/Options.module.css";
import {Actions, MaxCountRounds} from "@/components/game/store";
import Option, {OptionTypes} from "@/components/game/Option";
import {useEffect, useState} from "react";

function getOptionTypes(round) {
    if (round.answerIndex === undefined)
        return Array(4).fill(OptionTypes.Normal);

    return Array(4)
        .fill(OptionTypes.Normal)
        .map((value, index) => {
        if (round.correctIndex === index) {
            return OptionTypes.Correct;
        } else if (round.answerIndex === index) {
            return OptionTypes.Incorrect;
        }
        return value;
    });
}

function getOptions(round, checkOption) {
    return getOptionTypes(round)
        .map((value, index) => <Option
            type={value}
            blocked={round.answerIndex !== undefined}
            value={round.data[index].species_titleru}
            ind={index}
            onClick={checkOption}
            key={index}
        />)

}

export default function Options({round}) {
    const dispatch = useDispatch();
    const [options, setOptions] = useState(getOptions(round, checkOption(dispatch, round)));
    const set = () => {setOptions(getOptions(round, checkOption(dispatch, round)))};
    useEffect(() => {set()}, [round]);

    function checkOption(dispatch, round) {
        return (event) => {
            const index = Number(event.target.getAttribute('ind'));
            dispatch({type: Actions.SetAnswer, payload: index});
            if (index === round.correctIndex) {
                dispatch({type: Actions.IncrementScore})
            }
            set();
            setTimeout(() => {
                if (round.roundIndex + 1 === MaxCountRounds) {
                    dispatch({type: Actions.NextState});
                } else {
                    dispatch({type: Actions.NextRound});
                }
            }, 1500);
        }
    }

    return (
        <>
            <div className={classes.optionGrid}>
                {options}
            </div>
        </>
    )
}