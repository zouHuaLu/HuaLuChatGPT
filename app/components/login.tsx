import { useEffect, useState } from "react";

export default function Login() {
  const [loginPic, setLoginPic] = useState("");
  const getWxLogin = () => {
    fetch("https://yd.jylt.cc/api/wxLogin/tempUserId?secret=7a7dbfd5", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLoginPic(res.data.qrUrl);
      });
  };

  useEffect(() => {
    getWxLogin();
  }, []);
  return (
    <div>
      <img src={loginPic} alt="微信登录" />
    </div>
  );
}
