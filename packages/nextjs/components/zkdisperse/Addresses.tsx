import React from "react";

export interface AddressesProps {
  parseTextarea: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Addresses = ({ parseTextarea }: AddressesProps) => {
  return (
    <div className="form-control basis-1/2 px-5 flex flex-col">
      <label className="label">
        <span className="label-text font-medium text-lg">Addresses:</span>
        <span className="label-text-alt">Comma seperated</span>
      </label>
      <textarea
        className="textarea textarea-lg textarea-bordered rounded-lg flex-grow"
        onChange={parseTextarea}
      ></textarea>
    </div>
  );
};

export default Addresses;
