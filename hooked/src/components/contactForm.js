import React from "react";


const initialState = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    message: "",
    messageError: "",
    personal: false
}

export default class ContactForm extends React.Component {
    state = initialState;


    inputHandler = e => {
        let isCheckbox = e.target.type === "checkbox";
        
        this.setState({
            [e.target.name]: isCheckbox ? e.target.checked : e.target.value
        })
    }

    validator = () => {
        let emailError = "";
        let nameError = "";
        let messageError = "";
        
        if(this.state.name === "")
            nameError = "Name cannot be empty"
        if(!this.state.email.includes('@'))
            emailError = "not a valid email"
        if(this.state.message.length < 10)
            messageError = "atleast 20 characters required for a message";

        if(emailError || nameError || messageError) {
            this.setState({
                nameError, emailError, messageError
            });
            return false;
        }

        return true;
        
    }

    submitHandler = e => {
        e.preventDefault();
        if(this.validator()) {
            console.log(this.state);
            //  reset the form
            this.setState(initialState);
        }
        else
            console.log('invalid form')
    }

    render() {
        return (
            <form 
                onSubmit={this.submitHandler} 
                style={{
                    padding: "2em 1em",
                    border: "2px black solid",
                    width: "50%",
                    margin: "2em auto",
                    display: "grid",
                    gap: "1px",
                    // justifyContent: "left",
                    // alignItems: "center"
                }}
            >

                {/* show nameError if there's one
                    error will be set at the time of form validation!
                */}
                { this.state.nameError ? <span style={{fontSize: 12, color: "red"}}>{this.state.nameError}</span> : null }
                <input onChange={this.inputHandler} value={this.state.name} placeholder="name" name="name"/><br/>
                { this.state.emailError ? <span style={{fontSize: 12, color: "red"}}>{this.state.emailError}</span> : null }
                <input onChange={this.inputHandler} value={this.state.email} placeholder="email" name="email" type="email" /><br/>
                { this.state.messageError ? <span style={{fontSize: 12, color: "red"}}>{this.state.messageError}</span> : null }
                <textarea onChange={this.inputHandler} placeholder="enter you message" name="message" value={this.state.message}></textarea><br/>
                <div style={{marginBottom: "1em", display: "flex", justifyContent: "left"}}>
                    <label>Personal message</label>
                    <input onChange={this.inputHandler} type="checkbox" name="personal" checked={this.state.personal} /><br/>
                </div>

                <button type="submit">submit</button>
            </form>
        );
    }
}