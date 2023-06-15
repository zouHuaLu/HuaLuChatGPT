import { useEffect, useState } from "react";

export default function Login() {
  const [loginPic, setLoginPic] = useState("");
  const getWxLogin = () => {
    return fetch("https://yd.jylt.cc/api/wxLogin/tempUserId?secret=7a7dbfd5", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  };

  useEffect(() => {
    const data = getWxLogin();
    console.log(data);
  });
  return <div>登录页</div>;
}
