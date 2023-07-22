import {PanelStates} from "./store"
import {useSelector} from "react-redux"
import Loading from "@/components/game/Loading";
import HomePanel from "@/components/game/HomePanel";
import Panel from "@/components/game/Panel";
import EndPanel from "@/components/game/EndPanel";
import Error from "@/components/game/Error";
import {NotFound} from "next/dist/client/components/error";
import classes from './UI/Main.module.css'

export default function Main() {
    const state = useSelector(state => state.panelState);
    const loading = useSelector(state => state.loading);
    let component;
    component = loading && <Loading/>
    if (!loading) {
        switch (state) {
            case PanelStates.StartGame:
                component = <HomePanel/>
                break;

            case PanelStates.Game:
                component = <Panel/>
                break;

            case PanelStates.EndGame:
                component = <EndPanel/>
                break;

            case PanelStates.Error:
                component = <Error/>
                break;

            default:
                component = NotFound()
                break;
        }
    }
    return (
        <>
            <div className={classes.wrapper}>
                {component}
            </div>
        </>
    )
}