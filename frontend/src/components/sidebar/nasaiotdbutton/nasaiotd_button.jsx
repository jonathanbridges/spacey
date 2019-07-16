import React from 'react'
import {dispatchTurnOffNiotd, dispatchTurnOnNiotd} from '../../../actions/ui_actions'
import {connect} from 'react-redux'


const mstp = (state, ownPros )=>({
    nasaIotd: state.ui.nasaIotd
})
const mdtp = ( dispatch)=>({
    turnOn : ()=>dispatch( dispatchTurnOnNiotd()),
    turnOff : ()=>dispatch( dispatchTurnOffNiotd())
})

const NasaIotdButton = ( props )=>{
    let func
    if(props.nasaIotd ==='on'){
        func = props.turnOff.bind(this)
    }else{
        func= props.turnOn.bind(this)
    }

        //style={this.props.nasaIotd ==="on"? {color: 'green'}: { color: 'red'}}></button>

        //<button  onClick={ props.nasaIotd ==='on'? ()=> props.turnOff():()=>props.turnOn()} >this is a button!</button>
    return(<div>
        <button onClick={()=>func()}>{props.nasaIotd}</button>

    </div>)
}
export default connect(mstp, mdtp)(NasaIotdButton)