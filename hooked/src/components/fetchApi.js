import React from "react";



export default class FetchApi extends React.Component {
    state = {
        loading: true,
        person: null
    }

    //  this function will br called by react everytime components renders.
    async componentDidMount() {
        //  fetch data from api
        const url = "https://api.randomuser.me"
        let res = await fetch(url);
        let  data = await res.json();
        //  do whatever with data
        console.log(data.results[0]);
        //  set as state
        this.setState({
            person: data.results[0],
            loading: false
        });
    }


    render() {
        return (
            <div style={{ border: "1px black solid", padding: 5, width: "40%", margin: "auto", borderRadius: 10 }}>
            { this.state.loading || !this.state.person ? 
                <div>loading . . .</div>
                :
                <div>
                    <h2>Random Person</h2>
                    <img style={{width: 50, borderRadius: 100}} src={this.state.person.picture.thumbnail} alt="thumbnail" />
                    <h3>{this.state.person.name.first + ' ' + this.state.person.name.last}</h3>
                    <p>{this.state.person.gender}</p>
                    <b>{this.state.person.email}</b>
                    <p>{this.state.person.phone}</p>
                    <b>{this.state.person.location.city}, {this.state.person.location.country}</b>
                </div>

            }
            </div>
        );
    }
}