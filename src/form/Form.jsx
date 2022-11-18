import React from "react";
import DatePicker from "../components/datePicker/DatePicker";
import Dropdown from "../components/dropDown/Dropdown";
import Input from "../components/input/Input";
import TextArea from "../components/textArea/TextArea";

const Form = () => {
  return (
    <form>
      <div className="dark:bg-darkCardColor border dark:border-[#ffffff54] rounded-md px-5 py-10 space-y-4">
        <div>
          <label>Entity name</label>
          <Input />
        </div>

        <div>
          <label>Entity name</label>
          <Input />
        </div>

        <div className="flex items-center space-x-5">
          <div>
            <label>Country of tax residence</label>
            <Dropdown />
          </div>

          <div>
            <label>State/Province</label>
            <Dropdown />
          </div>
        </div>

        <div>
          <label>Job title</label>
          <Dropdown />
        </div>

        <div>
          <label>Scope of work</label>
          <TextArea />
        </div>

        <div>
          <label>Contractor start date</label>
          <DatePicker />
        </div>
      </div>

      <div className="flex items-center space-x-5 mt-4">
        <button className="border-2 dark:border-[#ffffff54] bg-transparent px-10 py-1.5 rounded-md">
          Back
        </button>
        <button className="flex-1 bg-primaryColor py-1.5 rounded-md text-white">
          Next
        </button>
      </div>
    </form>
  );
};

export default Form;
