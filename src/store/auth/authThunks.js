import calidadiesApi from "../../api/calidadiesApi";
import { vaciarProgramas } from "../programas/planDeMejoramientoSlice";
import { checkingCredentials, clearErrorMessage, login, logout, onCodigo } from "./authSlice"


// const {status,displayName} = getState().auth;

export const starLoginWithEmailAndPassword = ({email,password}) => {
    return  async(dispatch,getState) => {
        dispatch(checkingCredentials());


        try{
            const {data} = await calidadiesApi.post('/auth',{email,password});
          

            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({name:data.name,uid:data.uid}));
        

          
            
        } catch (error) {
            dispatch(logout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }
}
export const startComprobarEmail = ({name,email,password}) => {
    return async(dispatch) => {
        try {

            const {data} = await calidadiesApi.post('/auth/comprobarEmail',{email});
  
            const {codigo} = data;
            console.log(codigo.length);
            dispatch(onCodigo({codigo,name,email,password}))

            if(codigo.length > 0){
                await calidadiesApi.post('/auth/enviarCodigo',{name,email,password,codigo});

            }
        } catch (error) {
    
            dispatch(logout(error.response.data.msg || '--'))
        }


    }
}
export const startRegister = ({name,email,password}) => {
    return async(dispatch) => {
        
         dispatch(checkingCredentials());
       
        try {
            const {data} = await calidadiesApi.post('/auth/new',{email,password,name})
            console.log(data);
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({name:data.name,uid:data.uid}));
        
        } catch (error) {
            // dispatch(logout('Credenciales incorrectas'));
            dispatch(logout(error.response.data.msg || '--'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }
}
export const startCheckAuthToken = () => {
    return async(dispatch,getState) => {
 
        const token = localStorage.getItem('token')
        if(!token) return dispatch(logout());
        try {

       
            const {data} = await calidadiesApi.get('/auth/renew')
       
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispatch(login({name:data.name,uid:data.uid}))


        } 
        catch (error) {
            localStorage.clear();
            dispatch(logout());
        }
    }
}
export const startOnLogout = () => {
    return async(dispatch) => {
        try {
        dispatch(vaciarProgramas());
        dispatch(logout());
        localStorage.clear();
            


        } catch (error) {
            
        }



    }



}