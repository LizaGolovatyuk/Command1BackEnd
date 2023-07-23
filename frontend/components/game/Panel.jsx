import Paginator from "@/components/game/Paginator";
import Video from "@/components/game/Video";
import Options from "@/components/game/Options";
import classes from "./UI/Panel.module.css";
import {useSelector} from "react-redux";

export default function Panel() {
    const currentRound = useSelector(state => state.viewRound);
    const roundData = useSelector(state => state.roundsData[currentRound]);
    const videoUrl = String(roundData.data[roundData.correctIndex].species_video);
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.gameArea}>
                    <Paginator/>
                    <div className={classes.text}>{currentRound+1} раунд</div>
                    <Video url={videoUrl}/>
                    <Options round={roundData}/>
                </div>
            </div>
        </>
    )
}