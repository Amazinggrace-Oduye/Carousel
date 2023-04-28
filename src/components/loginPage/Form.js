/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

function Form() {
  return (
    <div className="w-full h-full text-black">
      <div className="py-5 mt-60 justify-center text-left ml-40 ">
        <h1 className="font-bold text-2xl ">Welcome back</h1>
        <p className="font-light  text-gray-500 ">
          Welcome back! Please enter your detail.
        </p>
      </div>
      <div className=" flex flex-col ml-40">
        <p className="text-left font-bold text-xs">Email</p>
        <div className="w-1/2 p-1.5 bg-gray-50 border-2 rounded-md flex">
          <FaRegEnvelope className="mr-2 text-gray-500" />
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
            title="Should be a valid email."
            placeholder="Enter your email"
            className="outline-none bg-white text-sm flex-auto"
          />
        </div>
        <p className="text-left mt-3 font-bold text-xs">Password</p>
        <div className="w-1/2 p-1.5 bg-white border-2 rounded-md flex ">
          <MdLockOutline className="mr-2 text-gray-500" />
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            title="Password should be digits (0 to 9) special character and alphabets (a to z)."
            placeholder="Enter your password"
            className="outline-none bg-white text-sm flex-auto"
          />
        </div>

        <a
          href="#"
          className="w-1/2 p-1.5 mt-5 bg-blue-400 border-2 rounded-md hover:bg-blue-100  text-white hover:text-blue-600"
        >
          Submit
        </a>
        <div className="flex w-1/2 mt-1 text-xs justify-between font-light">
          <label htmlFor="remember me">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="mr-1 "
            />
            Remember me
          </label>
          <a href="#" className="">
            Forgot password
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
