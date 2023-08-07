import React, { useState, useRef } from 'react'
import './Login.css'
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";
import TopPaddingLayout from '../layouts/TopPaddingLayout'

// 기본
const Login = ({user, setUser}) => {
  const [ pwShow, setPwShow ] = useState(false);
  const useridRef = useRef();
  const userpwRef = useRef();

  const loginHandle = ()=>{
       // error
       if( useridRef.current.value === ""){
            alert('id를 입력하세요.');
            useridRef.current.focus();
            // ref사용용도
       }else{
          const currentUser = {
            // name : document.querySelector('#user_id').value
            name : useridRef.current.value
          }
          setUser(currentUser);

          // setUserid("")
          // setUserpw("")
          useridRef.current.value = ""
          userpwRef.current.value = ""
       } 
  } 
  return (
    <div className='login-container'>
      <form className='login-content'
            onSubmit={ (e)=>e.preventDefault()}
      >
          <div>
              <input  type="text" 
                      placeholder='아이디'
                      autoFocus
                      id="user_id"
                      ref={useridRef}
              />
          </div>
          <div>
            <input  type={ !pwShow ? "password" : "text"}
                    placeholder='비밀번호'
                    
                    id="user_pw"
                    ref={ userpwRef }
            />
            <label role="button" className='button'
                onClick={()=>setPwShow(!pwShow)}
                htmlFor='user_pw'
            >
            {
              pwShow ? <BsFillEyeFill /> : <BsEyeSlashFill />
            }
            </label>
          </div>
          <div>
              <button onClick={ loginHandle }>로그인</button>
          </div>
      </form>
    </div>
  )
}

// export default Login
export default TopPaddingLayout(Login)