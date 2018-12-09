import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Timer from './presenter';
import {actionCreators as grapeActions} from '../../reducer/reducer';

// 리덕스와 관련된 것들을 넣는 파일

// Provier를 통해 전달받은 store를 Timer의 props로 전달해준다.
function mapStateToProps(state)
{
    const {
        isPlaying,
        elapsedTime,
        timerDuration
    } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

// dispatch는 액션을 리듀서로 보내는 function 이다.
function mapDispatchToProps(dispatch)
{
    return {
        startTimer: bindActionCreators(grapeActions.startTimer, dispatch),
        restartTimer: bindActionCreators(grapeActions.restartTimer, dispatch),
        stopTimer: bindActionCreators(grapeActions.stopTimer, dispatch),
        addSecond: bindActionCreators(grapeActions.addSecond, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);