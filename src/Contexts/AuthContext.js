import React, {Component, createContext} from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false
    }

    toggleState = () => {
        this.setState({isAuthenticated : !this.state.isAuthenticated})
    }

    render() {
        return (
            <AuthContext.Provider value = {{...this.state, toggleState: this.toggleState}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
};

export default AuthContextProvider;