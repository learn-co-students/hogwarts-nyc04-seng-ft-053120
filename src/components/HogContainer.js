import React from 'react'
import HogItems from './HogItems'
class HogContainer extends React.Component {

// const {name, greased, highestMedalAchieved, specialty, weight} = this.props.hogs

    renderHogs = (props) => {
       console.log(this.props)
         return this.props.hogs.map(hog => <HogItems key={hog.name} hog={hog}/>
        )
    }
    
    
    render(props) {

        return(
            
            <div className="ui grid container">
                {this.renderHogs()}
            </div>
        )
    }
}


export default HogContainer