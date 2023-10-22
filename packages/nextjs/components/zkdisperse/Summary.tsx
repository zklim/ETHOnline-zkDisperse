import React from "react";
import { parseEther } from "viem";
import { useWalletClient } from "wagmi";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";
import { AccountAmount } from "~~/hooks/zkdisperse/useParseTextarea";

interface SummaryProps {
  accountAmount: AccountAmount[];
}

const Summary = ({ accountAmount }: SummaryProps) => {
  const { data: walletClient } = useWalletClient();
  const { data: ZkDisperseContract } = useScaffoldContract({ contractName: "ZkDisperse", walletClient });

  const handleSubmit = async () => {
    const addresses = accountAmount.map(v => v.address);
    const value = accountAmount.map(v => parseEther(v.amount.toString()));

    const tx = await ZkDisperseContract?.write.disperse([addresses, value]);

    console.log(tx);
  };

  return (
    <div className="basis-1/2 px-5 flex flex-col">
      <label className="label">
        <span className="label-text font-medium text-lg">Summary:</span>
      </label>
      <div className="w-full overflow-y-scroll h-40 flex-grow">
        {accountAmount.map((v, i) => (
          <div className="flex items-center justify-between hover:bg-sky-100" key={i}>
            <div className="flex-grow">{v.address}</div>
            <div>{v.amount}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col gap-y-2">
        <div>
          <span className="">Total: {accountAmount.length} Addresses</span>
        </div>
        <div>
          <span className="">Total Amount: {accountAmount.reduce((partial, v) => partial + v.amount, 0)} ETH</span>
        </div>
        <div>
          <button className="btn btn-outline btn-block" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
