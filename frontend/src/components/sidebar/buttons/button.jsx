

import React from 'react'
import {dispatchTurnOffWidget, dispatchTurnOnWidget} from '../../../actions/ui_actions'
import {dispatchUpdate} from '../../../actions/session_actions'
import {connect} from 'react-redux'


const mstp = (state, ownProps )=>{
    let settings= {user:state.session.user, ui:state.ui, widget: ownProps.widget}

    return {
        widgetValue: state.ui[ownProps.widget], settings
    }
}

const mdtp = ( dispatch)=>({
    turnOn : (value)=>dispatch( dispatchTurnOnWidget(value)),
    turnOff : (value)=>dispatch( dispatchTurnOffWidget(value)),
    update: (userData) =>dispatch( dispatchUpdate(userData))
})

const SideBarButton = ( props )=>{
    let func
    let copy = Object.assign({},props.settings.ui)
   
    if(props.widgetValue ==='on'){
        copy[props.widget]='off'
        func = props.turnOff.bind(this)
    }else{
        copy[props.widget]='on'
        func= props.turnOn.bind(this)
    }

    let output={...props.settings}
    output.ui=copy

    let current=false
    if(props.settings.user){
        current=!!(Object.keys(props.settings.user).length>0)
    }

    return(<div>
        <div className={`SideBar--Button--${props.widgetValue || 'off'}`} onClick={()=>current? props.update(output): func(props.widget)}>{props.title}</div>

    </div>)
}
export default connect(mstp, mdtp)(SideBarButton)
