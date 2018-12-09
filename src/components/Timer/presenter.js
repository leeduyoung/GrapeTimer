import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../Button';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class Timer extends Component
{
    // props가 변경되는 순간에 불리는 함수 (자세한 내용은react life cycle 참고)
    componentWillReceiveProps(nextProps)
    {
        const currentProps = this.props;
        console.log(`The current isPlaying are: ${currentProps.isPlaying} and the new isPlaying is ${nextProps.isPlaying}`);

        if (!currentProps.isPlaying && nextProps.isPlaying)
        {
            // START INTERVAL
            const timerInterval = setInterval(() =>
            {
                currentProps.addSecond();
            }, 1000);

            this.setState({
                timerInterval
            });
        }
        else if (currentProps.isPlaying && !nextProps.isPlaying)
        {
            // STOP INTERVAL
            clearInterval(this.state.timerInterval);
        }
    }

    render() 
    {
        console.log(this.props);
        const {
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            stopTimer,
            restartTimer
        } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.timeBox}>
                    <Text style={styles.time}>{this.setSecondToMinute(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.refreshBox} onPress={restartTimer}>
                        <FontAwesome5 name={`sync-alt`} 
                            color={'white'} 
                            size={20}
                            solid/>
                        <Text style={styles.refresh}> 초기화</Text>
                    </TouchableOpacity>

                    {isPlaying
                        ? <Button iconName={"stop-circle"} onPress={stopTimer} size={80}/>
                        : <Button iconName={"play-circle"} onPress={startTimer} size={80}/>}
                </View>
            </View>
        )
    }

    setSecondToMinute(second)
    {
        let min = parseInt(second / 60);
        let sec = (second % 60);

        if (min < 10)
            min = `0${min}`;

        if (sec < 10)
            sec = `0${sec}`;

        return `${min}:${sec}`;
    }    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#663399',
    },
    timeBox: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        fontSize: 120,
        fontWeight: '300',
        color: 'white'
    },
    buttonBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    refreshBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25
    },
    refresh: {
        fontSize: 20,
        color: 'white'
    }
});