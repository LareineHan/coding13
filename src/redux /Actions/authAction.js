import { loginSuccess , allRequest , allError} from '../reducers/authReducer';
import apibk from '../../utils/apibk';
export const googleLogin=({token})=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await apibk.post('/auth',{token})
    if(res.status !==200)throw new Error('error-login')
    sessionStorage.setItem("token",token)
    console.log(res.data,'action')
   dispatch(loginSuccess(res.data.data))
  }catch(error){
    dispatch(allError(error.message))
    console.log(error.message,'error')
  }
}

export const logOut=()=>async(dispatch)=>{
  sessionStorage.removeItem("token")
  
}