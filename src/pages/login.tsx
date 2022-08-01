import { NextPage } from "next";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { auth } from "../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";

const Login: NextPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        router.push("/");
      }
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };

  const register = async () => {
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (newUser) {
        router.push("/");
      }
      console.log(newUser);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex flex-col items-center justify-start w-full bg-white h-[93vh]">
      <div className="pt-3 hover:cursor-pointer">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="logo"
          width={160}
          height={100}
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col border-2 border-gray-400 w-[28%] h-[60vh] justify-between p-5 bg-white ">
        <h3 className="text-3xl ">Sign In</h3>
        <div className="w-full flex flex-col justify-between h-[40%]">
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="px-3 bg-white border-2 border-gray-600 h-11 focus:outline-none"
              type="email"
              id="email"
              name="email"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2" htmlFor="pwd">
              Password:
            </label>
            <input
              className="px-3 bg-white border-2 border-gray-600 h-11 focus:outline-none"
              type="password"
              id="pwd"
              name="pwd"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              value={password}
            />
          </div>
        </div>
        <button
          onClick={signIn}
          className="bg-[#FEBD69] border-[1px] border-gray-400  w-full py-1 h-10 hover:cursor-pointer"
        >
          Sign In
        </button>
        <p className="text-sm ">
          By signing in you agree to Amazon&apos;s Conditions of Use & Sale.
          Please see our Privacy Notice. Our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          onClick={register}
          className="bg-[#eaeded] border-[1px] border-gray-400  w-full py-1 h-10 hover:cursor-pointer"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
