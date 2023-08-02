import { useState } from "react"
import image from "assets/login-bg.png"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { AuthProp } from "../../models/authprop"
import style from './style.module.css'
import { hanldeNav } from "utils/utils"

export default function Login(prop : AuthProp) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [invalidForm, setInvalidForm] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const nav = useNavigate()

  function handleCredentials(e: any) {
    setCredentials({
      username: e.target.id == "username" ? e.target.value : credentials.username,
      password:
        e.target.id == "password" ? e.target.value : credentials.password
    });
  }

  function handleOnSubmit(e: any) {
    e.preventDefault();
    if (credentials.username !== '' && credentials.password !== '') {
      axios.post('http://localhost:3000/user/verifyUser', 
          credentials, 
          { withCredentials: true }
      ).then((response) => {
        console.log(response.data)
        prop.setUser(response.data.role)
        prop.setUsername(response.data.username)
        hanldeNav(response.data.role, nav)
      }).catch(() => {
        prop.unsetUser
      })
    } else {
      setInvalidForm(true)
      setErrorMsg("All fields are required.")
      if (credentials.username == '')
        document.getElementById('username')?.setAttribute('data-error', 'true')
      if (credentials.password == '')
        document.getElementById('password')?.setAttribute('data-error', 'true')
    }
  }

  return (
    <div className="flex w-screen h-screen">
      <div className="w-[45%] bg-[#2B4EA2] grid justify-center align-middle items-center">
        <img
          src={image}
          className="w-[75%] h-auto mx-auto"
          alt=""
        />
      </div>

      <div className="w-[55%] h-full bg-[#FFFFFF] flex">
        <div className="w-full flex justify-center">
          <form action="" method="POST" onSubmit={ e => handleOnSubmit(e)} 
            className="grid gap-6 justify-start w-fit box-border h-fit my-auto"
          >
            <div className="font-[700] text-[48px] leading-[56px] text-[#2B4EA2]">
              Welcome to University A Portal
            </div>

            <div className="font-[300] text-[24px] leading-[28px] text-[#000000]">
              Enter your credentials to continue
            </div>
            <input
              //@ts-ignore
              data-error="false"
              type="text"
              className={style.error_outline + ` w-full h-[80px] font-[400] text-[32px] leading-[38px] px-[30px]
              border-[3px] border-[#ACACAC] rounded-[5px] focus:border-[#2B4EA2] focus:border-[3px]`}
              placeholder="Username"
              onChange={e => handleCredentials(e)}
              id="username"
              value={credentials.username}
            />
            
            <input
              type="password"
              className={style.error_outline + ` w-full h-[80px] font-[400] text-[32px] leading-[38px]
              px-[30px] border-[3px] border-[#ACACAC] rounded-[5px] focus:outline-[#2B4EA2]`}
              placeholder="Password"
              id="password"
              value={credentials.password}
              onChange={e => handleCredentials(e)}
            />

            {invalidForm == true 
              ? <p className=" text-red-700 font-medium">{errorMsg}</p>
              : <p className="invisible">Placeholder</p>
            }

            <div className="w-full h-[33px] flex justify-between">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  className="w-[33px] h-[33px] border-[2px] border-[#000000] rounded-[5px] hover:cursor-pointer"
                  onChange={() => setRememberMe(!rememberMe)}
                  id="rememberMe"
                  checked={rememberMe}
                />
                <label
                  className="min-w-[157px] h-[28px]
                  font-[400] text-[24px] leading-[28px] text-black" >
                  Remember me
                </label>
              </div>
              <a
                className="min-w-[244px] h-[28px]
                font-[400] text-[24px] leading-[28px] underline hover:cursor-pointer text-black hover:text-blue"
              >
                Forgot your password?
              </a>
            </div>

            <input
              type="submit"
              className="w-full h-[82px] bg-[#FF9D35] rounded-[5px] text-white font-[400] text-[40px] 
              leading-[47px] hover:bg-[#ff8808] hover:cursor-pointer"
              value={"Login"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
