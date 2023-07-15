import { useEffect, useState } from "react";
import image from "../../assets/login-bg.png";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login(props: any) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [errMsg, setErrMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleCredentials(e: any) {
    setCredentials({
      email: e.target.id == "email" ? e.target.value : credentials.email,
      password:
        e.target.id == "password" ? e.target.value : credentials.password
    });
  }

  const nav = useNavigate();

  async function handleOnSubmit(e: any) {
    e.preventDefault();

    await axios
      .post("/verifyUser", credentials)
      .then(res => {
        console.log(res);
        console.log(res.data);

        nav("/dashboard");
      })
      .catch(e => {
        console.log(e);

        setErrMsg(e.message);
      });

    setCredentials({
      email: "",
      password: ""
    });
  }

  useEffect(() => {
    /* console.log(credentials, rememberMe); */
  });

  return (
    <div className="relative w-screen h-screen bottom-0">
      <div className="fixed w-screen h-screen bg-[#2B4EA2]">
        <img
          src={image}
          className="absolute w-[849px] h-[800px] -left-[19px] top-[140px] mix-blend-screen"
          alt=""
        />
      </div>

      <div className="fixed w-[1109px] h-screen bg-[#FFFFFF] right-[0px]"></div>
      <div
        className="absolute min-w-[670px] h-[56px] 
        max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] max-lg:top-[40px] lg:top-[292px] 
        font-[700] text-[48px] leading-[56px] text-[#2B4EA2]"
      >
        Welcome to Universiry A Portal
      </div>
      <div
        className="absolute min-w-[670px] h-[28px] 
        max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] max-lg:top-[120px] lg:top-[372px] 
        font-[300] text-[24px] leading-[28px] text-[#000000]"
      >
        Enter your credentials to continue
      </div>
      <form action="" method="POST" onSubmit={e => handleOnSubmit(e)}>
        <p
          className="absolute min-w-[670px] h-[28px] 
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] max-lg:top-[180px] lg:top-[430px] 
          font-[300] text-[24px] leading-[28px] text-[#FF0000]"
        >
          {errMsg}
        </p>
        <input
          type="text"
          className="absolute w-[670px] h-[80px] 
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] max-lg:top-[208px] lg:top-[460px] 
          font-[400] text-[32px] leading-[38px] 
          px-[30px]
          border-[3px] border-[#ACACAC] rounded-[5px] focus:outline-0 focus:border-[#2B4EA2]"
          placeholder="Email"
          onChange={e => handleCredentials(e)}
          id="email"
          value={credentials.email}
        />
        <input
          type="password"
          className="absolute w-[670px] h-[80px] 
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] max-lg:top-[348px] lg:top-[600px] 
          font-[400] text-[32px] leading-[38px] 
          px-[30px]
          border-[3px] border-[#ACACAC] rounded-[5px] focus:outline-0 focus:border-[#2B4EA2]"
          placeholder="Password"
          id="password"
          value={credentials.password}
          onChange={e => handleCredentials(e)}
        />
        <div
          className="absolute min-w-[670px] h-[33px]
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] max-lg:top-[468px] lg:top-[720px]
        "
        >
          <input
            type="checkbox"
            className="absolute w-[33px] h-[33px]
            border-[2px] border-[#000000] rounded-[5px]"
            onChange={() => setRememberMe(!rememberMe)}
            id="rememberMe"
            checked={rememberMe}
          />
          <label
            className="absolute min-w-[157px] h-[28px]
            left-[54px]
            font-[400] text-[24px] leading-[28px] text-black"
          >
            Remember me
          </label>

          <p
            className="absolute min-w-[244px] h-[28px]
            right-0
            font-[400] text-[24px] leading-[28px] underline"
          >
            Forgot your password?
          </p>
        </div>

        <input
          type="submit"
          className="absolute w-[670px] h-[82px] 
          max-lg:left-[50%] max-lg:translate-x-[-50%] lg:right-[220px] max-lg:top-[538px] lg:top-[790px]
          bg-[#FF9D35] rounded-[5px]
          text-white font-[400] text-[40px] leading-[47px]"
          value={"Login"}
        />
      </form>
    </div>
  );
}
