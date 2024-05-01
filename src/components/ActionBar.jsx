import React from "react";
import AddModal from "./AddModal";
import { FaPlus } from "react-icons/fa";

export default function ActionBar({setAddedTask}) {
    return (
        <>
         <AddModal setAddedTask={setAddedTask} />
        <div className='add-button mr-4 mb-4'>
          <button type="button" className="btn glass-effect text-white border-0 p-2 pr-3 pl-3" data-toggle="modal" data-target="#addModal">
          <FaPlus />
          </button>
        </div>
       
      </>
    );
  }
  