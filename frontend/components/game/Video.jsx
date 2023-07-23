import classes from "./UI/Video.module.css"
import ReactPlayer from "react-player";

export default function Video(props) {
    return (
        <>
            <ReactPlayer
                className={classes.box}
                url={props.url}
                preload="auto"
                muted
                loop
                controls
                playing
            />
        </>
    )
}