import React from "react";
import AddModal from "./AddModal";
import { FaPlus } from "react-icons/fa";
import Button from "./Button";

export default function ActionBar({ setAddedTask }) {
  return (
    <>
      <AddModal setAddedTask={setAddedTask} />
      <div className="add-button mr-4 mb-4 mt-4">
        <Button
          icon={FaPlus}
          className="p-2 pr-3 pl-3"
          dataTarget="#addModal"
        />
      </div>
    </>
  );
}
