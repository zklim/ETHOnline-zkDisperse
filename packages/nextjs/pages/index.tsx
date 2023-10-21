import type { NextPage } from "next";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import Addresses from "~~/components/zkdisperse/Addresses";
import Summary from "~~/components/zkdisperse/Summary";
import { useParseTextarea } from "~~/hooks/zkdisperse/useParseTextarea";

const Home: NextPage = () => {
  const { accountAmount, parseTextarea } = useParseTextarea();

  return (
    <>
      <div className="flex items-center flex-col flex-grow justify-center font-zilla-slab p-20">
        <div className="mb-5">
          <RainbowKitCustomConnectButton />
        </div>
        <div className="py-10 px-20 shadow-lg shadow-blue-400 rounded-lg w-full">
          <div className="flex items-center flex-row justify-center flex-grow">
            <span className="text-6xl font-bold">zkDisperse</span>
          </div>
          <div className="flex items-center flex-row justify-center mt-5">
            <div className="mx-5 px-5 py-3">
              <button className="btn btn-outline btn-primary btn-wide btn-active">Ether</button>
            </div>
            <div className="mx-5 px-5 py-3">
              <button className="btn btn-primary btn-outline btn-wide">Token</button>
            </div>
          </div>
          <div className="flex flex-row justify-evenly mt-5">
            <Addresses parseTextarea={parseTextarea} />
            <Summary accountAmount={accountAmount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
