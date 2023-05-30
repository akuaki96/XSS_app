import { useState } from "react";
import style from "../styles/LoginPage.module.css";

const Loginpage = () => {
  type UserInfo = {
    name: string;
    pass: string;
  };

  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPass, setInputPass] = useState<string>("");
  const [userInfo, setUserInfo] = useState<UserInfo[]>([
    {
      name: "aaaa",
      pass: "bbbbb",
    },
  ]);

  const onclickSubmit = () => {
    setUserInfo((prev) => [...prev, { name: inputUsername, pass: inputPass }]);
  };

  console.log(userInfo);

  return (
    <div className={style.loginform}>
      <div className={style.loginArea}>
        <h1 className={style.loginTitle}>Login</h1>
        <div className={style.inputUsernameArea}>
          <input
            className={style.inputUsername}
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            placeholder="username"
          ></input>
        </div>

        <div className={style.inputPasswordArea}>
          <input
            className={style.inputPass}
            value={inputPass}
            onChange={(e) => setInputPass(e.target.value)}
            placeholder="password"
          ></input>
        </div>

        <div className={style.loginButton}>
          <button onClick={onclickSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
