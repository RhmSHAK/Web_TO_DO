import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskList = () => {
    return (
        <div className="max-w-4xl mx-auto mt-6 space-y-3">

            {/* Task Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">

                {/* LEFT */}
                <div className="flex items-center gap-3">
                    
                    <span className="text-gray-800 font-medium">
                        Learn React Basics
                    </span>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-6">

                    <button className="text-blue-600 hover:text-blue-800  transition">
                        <FaEdit size={22} />
                    </button>

                    

                    <button className="text-red-600 hover:text-red-800 transition">
                        <FaTrash size={22} />
                    </button>

                </div>
            </div>

           

        </div>
    );
};

export default TaskList;