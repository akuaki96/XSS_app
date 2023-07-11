import { FormEvent, useState } from "react";
import style from "../styles/LoginPage.module.css";

const Loginpage = () => {
  type UserInfo = {
    name: string;
    pass: string;
  };

  const [inputUsername, setInputUsername] = useState<string>("");
  const [inputPass, setInputPass] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<UserInfo[]>([]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //formを使うときリロードを防ぐためのコード
    try {
      // const res = await((await fetch("http://localhost:3001/login")).json())
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({ email: inputUsername, password: inputPass }),
      });

      // 失敗時は下の処理を行わない
      if (!res.ok) {
        return;
      }

      const json = await res.json();
      console.log("成功", json);
      // console.log({ res });

      setUserInfo((prev) => [{ name: inputUsername, pass: inputPass }]);

      // // ログイン状態はtrueにする
      // setIsLogin((prev) => !prev);

      // ログイン状態をローカルストレージに保存
      if (typeof window !== "undefined") {
        localStorage.setItem("isLogin", "true");
      }

      // ページを掲示板に戻す
      location.href = "./";

      // console.log(userInfo);
      // console.log(event);
    } catch (err) {
      console.error(err);
    }
  };

  // email: test@example.com pass:testPass
  // ユーザー名　cypasman1号

  // console.log(userInfo);
  // console.log(isLogin);

  return (
    <div className={style.loginform}>
      <div className={style.loginArea}>
        <h1 className={style.loginTitle}>Login</h1>

        {/* formの中のonSubmitでloginボタン押したとき発火 */}

        <form onSubmit={onSubmit}>
          <div className={style.inputUsernameArea}>
            <input
              className={style.inputUsername}
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              placeholder="username"
              required
              type="email"
              // minLength={5}
            ></input>
          </div>

          <div className={style.inputPasswordArea}>
            <input
              className={style.inputPass}
              value={inputPass}
              onChange={(e) => setInputPass(e.target.value)}
              placeholder="password"
              required
              type="password"
            ></input>
          </div>

          <div className={style.loginButton}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
