

/*
    nasaIotd:'on',
    twitterFeed: 'on',
    spaceLaunchnews:'on',
    hubbleNews: 'on',
    roverPhotos: 'on',
    modal: 'on'
 */
import React from 'react'
import {dispatchTurnOffWidget, dispatchTurnOnWidget} from '../../../actions/ui_actions'
import {connect} from 'react-redux'


const mstp = (state, ownProps )=>({
    widgetValue: state.ui[ownProps.widget]
})
const mdtp = ( dispatch)=>({
    turnOn : (value)=>dispatch( dispatchTurnOnWidget(value)),
    turnOff : (value)=>dispatch( dispatchTurnOffWidget(value))
})
const SideBarButton = ( props )=>{
    let func
    if(props.widgetValue ==='on'){
        func = props.turnOff.bind(this)
    }else{
        func= props.turnOn.bind(this)
    }

    return(<div>
        <button onClick={()=>func(props.widget)}>{props.title}</button>

    </div>)
}
export default connect(mstp, mdtp)(SideBarButton)