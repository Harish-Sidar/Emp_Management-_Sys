import React from 'react'

const CreateTask = () => {
  return (
  
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
        <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-white mt-2 ">
                Task Title
              </h3>
              <input
                type="text"
                className=" text-sm py-1 px-2 w-4/5 outline-none bg-transparent  border-[1px] border-gray-400 p-2 rounded-md"
                placeholder="Make a UI"
              />
            </div>
            <div>
              <h3 className="text-white mt-2">Date</h3>
              <input
                type="date"
                className="text-sm py-1 px-2  w-4/5 outline-none bg-transparent  border-[1px] border-gray-400 p-2 rounded-md"
                placeholder="Enter your task"
              />
            </div>
            <div>
              <h3 className="text-white mt-2">asign to</h3>
              <input type="text" placeholder="enter something"  className=" text-sm py-1 w-4/5 outline-none bg-transparent  border-[1px] border-gray-400 p-2 rounded-md"/>
            </div>
            <div>
              <h3 className="text-white mt-2">Category</h3>
              <input type="text" placeholder="enter something"  className=" text-sm py-1 w-4/5 outline-none bg-transparent  border-[1px] border-gray-400 p-2 rounded-md" />
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-white text-sm mb-0.5 ">Description</h3>
            <textarea
              className=" w-full h-44 text-sm py-2 px-4 outline-none bg-transparent  border-[1px] border-gray-400 p-2 rounded-md"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write a descroption"
            ></textarea>
            
          <button
            type="submit"
            className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5  text-sm mt-4 w-full text-white p-2 rounded-md"
          >
            Create task
          </button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask