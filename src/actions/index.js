import { LOG_IN, LOG_ERR} from '../actions/types';

export function logIn(params, cb) {
    return dispatch => {
      if (checkCredentials(params)) {
        dispatch({
          type: LOG_IN,
          payload: {
            name: params.username,
          },
        })
        cb()
      } 
      else if (checkCredentialsUser(params)) {
        dispatch({
          type: LOG_IN,
          payload: {
            name: params.username,
          },
        })
        cb()
      }
      else {
        dispatch({
          type: LOG_ERR,
          payload: {
            errorMsg: 'Имя пользователя или пароль введены не верно',
          },
          error: true,
        })
      }
    }
}

export function checkCredentials(params) {
    if (params.username.toLowerCase() !== 'admin' || params.password !== '12345') {
      return false
    }
    return true
}

export function checkCredentialsUser(params) {
  if (params.username.toLowerCase() !== 'user' || params.password !== '123') {
    return false
  }
  return true
}