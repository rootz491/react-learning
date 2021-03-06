import React from "react";

import Counter from "./counter";
import ImgSlider from "./imgSlider";


export default class Toggler extends React.Component {
    state = {
        isVisible: false
    }


    render() {
        // button text value based on state `isVisible`
        const buttonText = this.state.isVisible ? "Counter" : "img slider";

        return (
            <div>
                {/* display components based on current state of `isVisible` */}
                <div style={{margin: "auto", width: "50%", height: "200px", border: "1px black solid", padding: "2em 1em"}}>
                    {/* Here when we toggle b/w both components, their STATEs will reset! */}
                    {/* thats because whenever a compenents leaves the or unrenders from main component,
                        it'll loose it's STATE.
                        
                        To overcome this problem, instead of actually removing component, just make 
                        it hidden using display:`none` when condition mets!
                        
                        this way you wont loose the state of a component.
                    */}
                    {this.state.isVisible ? <ImgSlider /> : <Counter init={0} />}
                </div>
                <br/>
                {/* switch b/w components by changing state thru button event */}
                <button onClick={() => {
                this.state.isVisible ? 
                this.setState({
                    isVisible: false
                }) :
                this.setState({
                    isVisible: true
                })
                }}>{buttonText}</button>

            </div>
        );
    }

}