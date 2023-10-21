import React, { useEffect } from "react";
import type { NextPage } from "next";
import { useSignMessage } from "wagmi";

const Withdraw: NextPage = () => {
  const { data: signMessageData, signMessage, variables } = useSignMessage();

  useEffect(() => {
    console.log(signMessageData);
    console.log(variables);
  }, [signMessageData]);

  const handleClick = () => {
    signMessage({ message: "hello world" });
  };

  return (
    <div className="py-10 px-20 shadow-lg shadow-blue-400 rounded-lg w-full">
      <div className="flex items-center flex-row justify-center flex-grow">
        <span className="text-6xl font-bold">zkDisperse</span>
      </div>
      <div className="flex items-center flex-row justify-center mt-5">
        <span className="text-3xl">Withdraw</span>
      </div>
      <div className="flex flex-row justify-evenly mt-5">
        <div className="flex-grow">
          <button className="btn btn-block btn-wide btn-primary" onClick={handleClick}>
            Sign
          </button>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
