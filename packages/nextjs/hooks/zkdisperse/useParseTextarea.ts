import { useState } from "react";
import { isAddress } from "ethers";

export interface AccountAmount {
  address: string;
  amount: number;
}

export const useParseTextarea = () => {
  const [accountAmount, setAccountAmount] = useState<AccountAmount[]>([]);

  const parseTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAccountAmount([]);
    const lines = e.target.value.split("\n");
    for (const l of lines) {
      const splits = l.split(",");
      const address = splits[0];
      const amount = Number(splits[1]);
      if (!isAddress(address) || isNaN(amount)) continue;
      setAccountAmount(prev => [...prev, { address, amount }]);
    }
  };

  return { parseTextarea, accountAmount };
};
