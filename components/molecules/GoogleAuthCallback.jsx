import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useRouter } from "next/router";

export default function GoogleAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    axios
      .get(`http://api.lenjelenanmadura.id/api/auth/signup/callback`)
      .then((res) => {
        console.log(res);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    //eslint-disable-next-line
  }, []);
}
