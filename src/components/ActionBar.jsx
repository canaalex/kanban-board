import React from "react";
import AddModal from "./AddModal";

export default function ActionBar({setAddedTask}) {
    return (
        <>
        <div className='add-button mr-4 mb-4'>
          <button type="button" className="btn glass-effect text-white border-0 p-2" data-toggle="modal" data-target="#addModal">+</button>
        </div>
        <AddModal setAddedTask={setAddedTask} />
      </>
    );
  }
  