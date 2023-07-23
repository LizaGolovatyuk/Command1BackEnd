import RoundIndicator, {IndicatorTypes} from "@/components/game/RoundIndicator";
import classes from "./UI/Paginator.module.css"
import {MaxCountRounds} from "@/components/game/store";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

function getIndicators(currentRound, roundsData) {
    return Array(MaxCountRounds)
        .fill(0)
        .map((value, index) => {
            let type = IndicatorTypes.Undefined;
            if (index > currentRound) {
                type = IndicatorTypes.Disabled
            } else if (index === currentRound) {
                type = IndicatorTypes.Current
            } else if (index < currentRound) {
                type = roundsData[index].correctIndex === roundsData[index].answerIndex
                    ? IndicatorTypes.Correct
                    : IndicatorTypes.Incorrect;
            }
            return <RoundIndicator type={type} key={index} ind={index}/>
        });
}

export default function Paginator() {
    const currentRound = useSelector(state => state.currentRound);
    const roundsData = useSelector(state => state.roundsData);
    const set = () => setIndicators(getIndicators(currentRound, roundsData))
    const [indicators, setIndicators] = useState(getIndicators(currentRound, roundsData))
    useEffect(() => {set()}, [currentRound])
    return (
        <>
            <div className={classes.container}>
                {indicators}
            </div>
        </>
    )
}