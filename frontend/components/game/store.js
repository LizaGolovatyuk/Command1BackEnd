import {createStore} from "redux";

export const MaxCountRounds = 10;

export const PanelStates = {
    StartGame: "Start",
    Game: "Game",
    EndGame: "EndGame",
    Error: "Error",
    Undefined: undefined
};

export const defaultState = {
    panelState: PanelStates.StartGame,
    currentRound: undefined,
    score: undefined,
    loading: false,
    error: undefined,
    roundsData: [],
};

export const Actions = {
    InitializeState: "InitializeState",
    NextState: "NextState",
    InitializeRound: "InitializeRound",
    NextRound: "NextRound",
    InitializeScore: "InitializeScore",
    IncrementScore: "IncrementScore",
    SetRoundsData: "SetRoundsData",
    SetDefault: "SetDefault",
    StartLoad: "StartLoad",
    FinishLoad: "FinishLoad",
    Error: "Error"
}

const reducer = (state= defaultState, action) => {
    switch (action.type) {
        case Actions.SetDefault:
            return defaultState;

        case Actions.InitializeState:
            return {...state, panelState: PanelStates.Game};

        case Actions.NextState:
            return {...state, panelState: getNextState(state.panelState) || PanelStates.StartGame};

        case Actions.InitializeRound:
            return {...state, currentRound: 1};

        case Actions.NextRound:
            return {...state, currentRound: getNextRound(state.currentRound)};

        case Actions.InitializeScore:
            return {...state, score: 0}

        case Actions.IncrementScore:
            return {...state, score: state.score + 1};

        case Actions.SetRoundsData:
            return {...state, roundsData: action.payload}

        case Actions.StartLoad:
            return {...state, loading: true}

        case Actions.FinishLoad:
            return {...state, loading: false}

        case Actions.Error:
            return {...state, panelState: PanelStates.Error, error: action.payload}

        default:
            return state;
    }
};

const store = createStore(reducer);
export default store;

function getNextState(currentState) {
    switch (currentState) {
        case PanelStates.StartGame:
            return PanelStates.Game;

        case PanelStates.Game:
            return PanelStates.EndGame;

        case PanelStates.EndGame:
            return PanelStates.Undefined;

        default:
            return PanelStates.Undefined;
    }
}

function getNextRound(currentRound) {
    if (Number.isInteger(currentRound) && currentRound < MaxCountRounds) {
        return currentRound + 1;
    }
    return undefined;
}

async function getRoundsData() {

}