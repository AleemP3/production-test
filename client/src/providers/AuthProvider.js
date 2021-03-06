import React from "react";
import axios from "axios";
import LoginModal from "../components/LoginModal";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { 
    user: null,
    loginError: false,
    registerError: false,
  };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( res => {
        console.log(res);
        this.setState({ registerError: true })
      })
  }

  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( res => {
        console.log(res);
        this.setState({ loginError: true})
      })
  }

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push('/login');
        this.setState({loginError: false})
      })
      .catch( res => {
        console.log(res);
      })
  }

  updateUser = (id, user) => {
    let data = new FormData();
    data.append('file', user.file);
    axios.put(`/api/users/${id}?name=${user.name}&email=${user.email}`, data)
      .then( res => this.setState({ user: res.data, }) )
  }

  toggleLoginError = () => {
    this.setState({loginError: !this.state.loginError})
  }

  toggleRegisterError = () => {
    this.setState({registerError: !this.state.registerError})
  }

  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
        updateUser: this.updateUser,
        toggleLoginError: this.toggleLoginError,
        toggleRegister: this.toggleRegisterError,
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};

