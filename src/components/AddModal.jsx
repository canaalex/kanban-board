import React, { useState,useRef } from "react";

export default function AddModal({setAddedTask}) {
    const [formData,setFormdata]=useState({
        title:'',
        status:'todo',
        description:''
    });
    const modalRef = useRef(null);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
      };
     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('handle submit');
        const { title, description } = formData;
         // Validate title (only alphabets)
         const titleRegex = /^[a-zA-Z\s]+$/;
         if (!titleRegex.test(title)) {
           alert("Title should contain only alphabets.");
           return;
         }
       
         // Validate description (minimum 25 characters)
         if (description.length < 25) {
           alert("Description should have a minimum of 25 characters.");
           return;
         }
        setAddedTask(formData);
        const modal = modalRef.current;
        if (modal) {
          const backdrop = document.querySelector(".modal-backdrop");
          console.log('backdrop',backdrop)
          if (backdrop) {
            backdrop.remove(); // Remove the backdrop
          }
          modal.classList.remove("show"); // Remove the "show" class to hide the modal
          modal.setAttribute("aria-hidden", "true");
          document.body.classList.remove("modal-open");
        }
        setFormdata({
            title:'',
            status:'todo',
            description:''
        });
     }
    console.log('check',formData);
  return (
    <div
      className="modal fade"
      id="addModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Add Task
              
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="d-flex">Task Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add task title"
                  value={formData.title}
                  onChange={handleChange}
                  name="title"
                />
              </div>
              <div className="form-group">
                <label className="d-flex">Select Status</label>
                <select className="form-control"  value={formData.status}
                  onChange={handleChange}
                  name="status">
                  <option value="todo">Todo</option>
                  <option value="doing">Doing</option>
                  <option value="done">Done</option>
                </select>
              </div>
              <div className="form-group">
                <label className="d-flex">Task Description</label>
                <textarea
                  class="form-control"
                  rows="2"
                  value={formData.description}
                  onChange={handleChange}
                  name="description"
                ></textarea>
              </div>
              <div className="d-flex justify-content-end">
              <button
              type="button"
              className="btn  header text-white"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn column-background text-white ml-2">
              Save changes
            </button>
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
