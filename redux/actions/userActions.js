import { ACTIONS } from './actions';
import {
  helpSignupUser,
  helpLoginUser,
  helpUpdateUser,
  helpLogOut,
} from '../../utils/apiCalls';

export const signUpUser = (data) => async (dispatch) => {
  try {
    const res = await helpSignupUser(data);
    dispatch({
      type: ACTIONS.SIGNUP_USER,
      payload: res.user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (loginData) => async (dispatch) => {
  try {
    const res = await helpLoginUser(loginData);
    dispatch({
      type: ACTIONS.LOGIN_USER,
      payload: res.user,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateUser = (data) => async (dispatch) => {
  try {
    const res = await helpUpdateUser(data);
    dispatch({
      type: ACTIONS.UPDATE_USER,
      payload: res,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logOutUser = () => async (dispatch) => {
  try {
    await helpLogOut();
    dispatch({
      type: ACTIONS.LOGOUT_USER,
      payload: null,
    });
  } catch (err) {
    console.log(err);
  }
};
