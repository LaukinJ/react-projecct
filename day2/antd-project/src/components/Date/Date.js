import React from 'react'
import { Calendar } from 'antd';

// function onPanelChange(value, mode) {
//   console.log(value, mode);
// }


export default class Date extends React.Component{
    onPanelChange(value, mode){
        console.log(value, mode);
    }
    render(){
        return(
            <Calendar onPanelChange={this.onPanelChange} />
        )
    }
}