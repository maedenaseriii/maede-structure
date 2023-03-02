import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/Button";
import { setIsLogin } from "../../states/slices/globalSlice";

const postAuth = async ({ username, password }) => {
  setTimeout(() => {
    if (!username || !password)
      return new Error("username or password is empty!");

    if (username === "ahmad" && password === "1234") return "token";

    return new Error("user not found!");
  }, 1000);
};

const AuthPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = () => {
    postAuth({ username, password })
      .then((token) => {
        dispatch(setIsLogin(true));
        dispatch(setUsername(username));
        localStorage.setItem("user-token", token);
      })
      .catch(console.log);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <section className="p-8 rounded-md shadow max-w-sm w-full flex flex-col space-y-4">
        <h2 className="font-bold text-lg">ورود / ثبت‌نام</h2>

        <label htmlFor="username">
          <p>نام کاربری</p>
          <input
            type="text"
            name="username"
            className="p-1 rounded-md shadow w-full"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label htmlFor="password">
          <p>کلمه عبور</p>
          <input
            type="text"
            name="password"
            className="p-1 rounded-md shadow w-full"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <Button onClick={onLoginClick}>ورود به سایت</Button>
      </section>
    </div>
  );
};

export default AuthPage;
