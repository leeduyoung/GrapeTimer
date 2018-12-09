// ACTION TYPES
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const STOP_TIMER = "STOP_TIMER";
const ADD_SECOND = "ADD_SECOND";

// ACTION CREATORS
function startTimer()
{
    return {
        type: START_TIMER
    };
}
function restartTimer()
{
    return {
        type: RESTART_TIMER
    };
}
function stopTimer()
{
    return {
        type: STOP_TIMER
    };
}
function addSecond()
{
    return {
        type: ADD_SECOND
    };
}

// REDUCER
const TIMER_DURATION = 1500;
const initialState = 
{
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: TIMER_DURATION
};

// 리덕스는 자동으로 액션을 리듀서로 보낸다.
function reducer(state = initialState, action)
{
    switch(action.type)
    {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case STOP_TIMER:
            return applyStopTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

// REDUCER FUNCTIONS
function applyStartTimer(state)
{
    return {
        ...state,
        isPlaying: true
    }   
}
function applyStopTimer(state)
{
    return {
        ...state,
        isPlaying: false,
    }
}
function applyRestartTimer(state)
{
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0,
    }
}
function applyAddSecond(state)
{
    if (state.elapsedTime < TIMER_DURATION)
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        }
    else
        return {
            ...state,
            isPlaying: false
        }
}

// EXPORT ACTION CREATORS
const actionCreators =
{
    startTimer,
    restartTimer,
    stopTimer,
    addSecond
};
export { actionCreators };

// EXPORT REDUCER
export default reducer;