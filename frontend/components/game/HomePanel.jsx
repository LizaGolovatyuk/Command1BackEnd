import classes from "./UI/HamePanel.module.css"
import {MaxCountRounds, Actions} from "./store"
import {useDispatch} from "react-redux";

function startGame(dispatch) {
    return () => {
        dispatch({type: Actions.StartLoad});
        dispatch({type: Actions.InitializeRound});
        dispatch({type: Actions.InitializeScore});
        dispatch({type: Actions.InitializeState});
        const url = "http://127.0.0.1:5000/media_birds_by_one_family";
        const urls = Array(MaxCountRounds).fill(url)
        Promise.all(urls.map(url => fetch(url)))
            .then(async (responses) => {
                const roundsData = [];
                let index = 1;
                for (let req of responses) {
                    roundsData.push({
                        roundNumber: index,
                        AnswerIndex: Math.floor(Math.random()*5),
                        data: await req.json()
                    });
                    index += 1;
                }
                dispatch({type: Actions.FinishLoad});
                return dispatch({type: Actions.SetRoundsData, payload: roundsData});
            })
            .catch(error => dispatch({type: Actions.Error, payload: error}))
            .finally(() => dispatch({type: Actions.FinishLoad}));
    }
}

export default function HomePanel() {
    const dispatch = useDispatch();
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.title}>
                    Узнай птицу
                </div>
                <img src="bird.png" className={classes.bird}/>
                <div className={classes.subTitle}>
                    Угадайте {MaxCountRounds} птиц
                </div>
                <button
                    className={classes.startButton}
                    onClick={startGame(dispatch)}
                >Начать игру</button>
            </div>
        </>
    )
}