import { useDispatch } from 'react-redux';

import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {

  // ! dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.
  const dispatch = useDispatch();

  const loginHandler = event => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
