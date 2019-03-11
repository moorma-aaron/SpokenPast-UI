import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import TextField from 'material-ui/TextField';
import { SubmitButton } from './buttons';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pw: ''
        }
    }
    submitForm = (e) => {
        e.preventDefault() //this stops the page from redireting when you hit submit
        alert(`Email: ${this.state.email} - PW: ${this.state.pw}`)
    }

    render(){
        return(
            <div style={{width: '100', margin:'auto',}}>
                <Grid className="home-grid">
                    <Cell col={12}>
                    <img 
                        src="https://cdn2.iconfinder.com/data/icons/security-2-1/512/user_access-512.png"
                        alt="login"
                        classname="login-img"
                        />

                        <div className="banner-text">
                            <h1></h1>
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <form onSubmit={e => { this.submitForm(e) }}>
                            <TextField required floatingLabelText={`Email`} onChange={(e) => this.setState({ pw: e.target.value })} />
                            <TextField required floatingLabelText={`Password`} onChange={(e) => this.setState({ pw: e.target.value })} />
                            <SubmitButton />
                        </form>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Login;
