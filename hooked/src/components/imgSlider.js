import React from "react";



export default class ImgSlider extends React.Component {
    //  state can accessed diretly also.
    state = {
        imgs: [
            "https://images.unsplash.com/photo-1592564630984-7410f94db184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzY4OTl8MHwxfHNlYXJjaHwxfHxyaWNrJTIwYW5kJTIwbW9ydHl8ZW58MHx8fHwxNjI1NjE1MzQ1&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1548623438-382288a23d6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzY4OTl8MHwxfHNlYXJjaHwyfHxyaWNrJTIwYW5kJTIwbW9ydHl8ZW58MHx8fHwxNjI1NjE1MzQ1&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1598480083067-f9ceffea9b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzY4OTl8MHwxfHNlYXJjaHw2fHxyaWNrJTIwYW5kJTIwbW9ydHl8ZW58MHx8fHwxNjI1NjE1MzQ1&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1555631545-e5143ba3bced?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMzY4OTl8MHwxfHNlYXJjaHwyfHxibGFja2hvbGV8ZW58MHx8fHwxNjI1NjE2MTY3&ixlib=rb-1.2.1&q=80&w=1080",
        ],
        current: 0
    }


    render() {
        return (
            <div>
                <img style={{
                    width: 100,
                    height: 100
                }} src={this.state.imgs[this.state.current]} alt="fuckin img" />
                <br/>
                {/* previous button */}
                <button onClick={() => {
                    if(this.state.current>0)
                        this.setState({
                            current: this.state.current - 1
                        })
                }}>previous</button>
                <br/><br/>
                {/* next button */}
                <button onClick={() => {
                    if(this.state.current<3)
                        this.setState({
                            current: this.state.current + 1
                        })
                }}>next</button>
            </div>
        );
    }

}