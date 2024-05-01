import React, { useState ,useEffect} from "react";

export default function EditModal({editTaskForm,setEditedTask}) {
    const [formData,setFormdata]=useState({
        title:'',
        status:'todo',
        description:''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value });
      };
     const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('handle submit in edit',formData);
        setEditedTask(formData);
        setFormdata({
            title:'',
            status:'todo',
            description:''
        });
     }
    console.log('editform',formData);
    useEffect(()=>{
        console.log('editModal',editTaskForm)
        setFormdata(editTaskForm);
    },[editTaskForm])
  return (
    <div
      className="modal fade"
      id="editModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Task
              
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
              <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" className="btn btn-primary">
              Save changes
            </button>
            </form>
          </div>
          {/* <div className="modal-footer">
            
          </div> */}
        </div>
      </div>
    </div>
  );
}
