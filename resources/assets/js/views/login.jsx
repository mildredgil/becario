import Login from './modalLogin';
const _Login = withStyles(styles)(Login);

if (document.getElementById('login-modal')) {
  ReactDOM.render(<_Login/>, document.getElementById('login-modal'));
}