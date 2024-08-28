import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hook/useForm"
import { startComprobarEmail, startRegister } from "../../store/auth/authThunks";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from 'react';

import Swal from "sweetalert2";
import { clearErrorMessage } from "../../store/auth/authSlice";
import { ComprobarPage } from "./ComprobarPage";

const registeFormFiles = {
  registerName:'',
  registerEmail:'',
  registerPassword:'',
  registerPassword2:''

}
const formValidations ={
  registerEmail:[(value) =>value.includes('@')  ,'El correo no es valido'],
  registerPassword:[(value) =>value.length >=6  ,'El password debe de tener mas de 6 letras'],
  registerPassword2:[(value) =>value.length >=6  ,'El password debe de tener mas de 6 letras'],
  registerName:[(value) =>value.length >=1  ,'El nombre es obligatorio']

}

export const RegisterPage = () => {

  const {errorMessage,codigo} = useSelector(state => state.auth);
 
  const dispatch = useDispatch();

  const {onInputChange,
    registerName,
    registerPassword,isFormValid,formState,
    registerEmail,registerPassword2,onResetForm} = useForm(registeFormFiles)
    

  const onSubmitRegister = (event) => {
    event.preventDefault()

   
    if(registerPassword.length < 5){
     Swal.fire('Error la contraseña debe de tener mas de 6 caracteres',"error",'error');
     onResetForm();
     return ;
    }
    if(registerName.length <= 0){
     Swal.fire('Error el usuario debe de tener nombre',"error",'error');
     onResetForm();
     return ;


    }
    if(registerPassword != registerPassword2){
      Swal.fire('Error las constraseñas no coinciden',"error",'error');
     onResetForm();
      return ;
 
     }
    
    dispatch(startComprobarEmail({name:registerName,password:registerPassword,email:registerEmail}))
    // dispatch(startRegister({name:registerName,password:registerPassword,email:registerEmail}))

    
  }

  useEffect(() => {
    if(errorMessage !== undefined){
         Swal.fire('Error en la autenticacion', errorMessage, 'error')
         dispatch(clearErrorMessage())

    }
 
 
 
  
  }, [errorMessage])

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);


	  const togglePasswordVisibility = () => {
	    setShowPassword(!showPassword);
	};
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
};


  return (
    <>
    {
      (codigo != null) ? 
      <>
      <ComprobarPage/>

      <div className="container text-dark">
      <div className="d-flex align-items-center justify-content-center login-center">
          <form className=" p-5 rounded bg-light border border-2" onSubmit={onSubmitRegister}>
           <h2 className="mb-3">Register</h2>

              <div className="form-group" >
               <input type="name" className="form-control mb-3 input-text" 
               id="name" placeholder="Nombre Completo"
               value={registerName} name="registerName"
               onChange={onInputChange}
           
               />
              </div>
              <div className="form-group" >
               <input type="email" className="form-control mb-3 input-text" 
               id="email" placeholder="Email"
               value={registerEmail} name="registerEmail"
               onChange={onInputChange}
              
               />
              </div>
              <div className="form-group">
               <input type="password" className="form-control mb-4 input-text"
                id="password" placeholder="Password"
                value={registerPassword} name="registerPassword"
                onChange={onInputChange}
                
                />
                 <div className="form-group">
               <input type="password" className="form-control mb-4 input-text"
                id="password2" placeholder="Confirma el Constraseña"
                value={registerPassword2} name="registerPassword2"
                onChange={onInputChange}
                
                />
              </div>
              </div>
             <button type="submit" className="btn btn-primary botton-login">Register</button>
              <p className="register-page">Ya tienes cuenta? <Link to={'/auth/login'} className="text-primary">Inicia Sesion</Link></p>
              
          </form>
      </div>
    </div>
      
      </>
      
      :
      <div className="container text-dark animate__animated animate__backInDown">
      <div className="d-flex align-items-center justify-content-center login-center">
          <form className=" p-5 rounded bg-light border border-2" onSubmit={onSubmitRegister}>
           <h2 className="mb-3">Register</h2>

              <div className="form-group" >
               <input type="name" className="form-control mb-3 input-text" 
               id="name" placeholder="Nombre Completo"
               value={registerName || ''} name="registerName"
               onChange={onInputChange}
           
               />
              </div>
              <div className="form-group" >
               <input type="email" className="form-control mb-3 input-text" 
               id="email" placeholder="Email"
               value={registerEmail || ''} name="registerEmail"
               onChange={onInputChange}
              
               />
              </div>
              
				      <div className="form-group input-group">
			          <input  type={showPassword ? 'text' : 'password'}
                   className="form-control mb-4 input-text"
                    id="password" placeholder="Constraseña"
                    value={registerPassword || ''} name="registerPassword"
                    onChange={onInputChange}
				        />
				  
				        <i className={`bi bi-eye-fill input-group-text eyeInput ${(showPassword) ? 'd-none' : ''}`} onClick={togglePasswordVisibility}></i>

				        <i className={`bi bi-eye-slash-fill input-group-text eyeInput ${(showPassword) ? '' : 'd-none'}`}  onClick={togglePasswordVisibility}></i>

			      	</div>
              <div className="form-group input-group">
			          <input  type={showPassword2 ? 'text' : 'password'}
                   className="form-control mb-4 input-text"
                    id="password2" placeholder="Confirma el Constraseña"
                    value={registerPassword2 || ''} name="registerPassword2"
                    onChange={onInputChange}
				        />
				  
				        <i className={`bi bi-eye-fill input-group-text eyeInput ${(showPassword2) ? 'd-none' : ''}`} onClick={togglePasswordVisibility2}></i>

				        <i className={`bi bi-eye-slash-fill input-group-text eyeInput ${(showPassword2) ? '' : 'd-none'}`}  onClick={togglePasswordVisibility2}></i>

			      	</div>
             
              <button type="submit" className="btn btn-primary botton-login">Register</button>
              <p className="register-page">Ya tienes cuenta? <Link to={'/auth/login'} className="text-primary">Inicia Sesion</Link></p>
              
          </form>
      </div>
    </div>
    }
 
     </>
  )
}
