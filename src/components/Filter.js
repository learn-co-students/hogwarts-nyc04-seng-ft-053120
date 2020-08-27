import React from 'react'

export default function Filter(props) {
    

    return (
        <div>
            <div>
                
                <label htmlFor = "greased">Greased Hogs</label>
                <input onChange={props.changeGreasedState()} type="checkbox" name="greased" checked={props.isGreased}></input>
            </div>
        </div>
    )
}

