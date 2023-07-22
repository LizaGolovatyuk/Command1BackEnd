import Main from "@/components/game/Main";
import store from "@/components/game/store"
import {Provider} from "react-redux";

export default function Game() {
    return <Provider store={store}><Main/></Provider>
}