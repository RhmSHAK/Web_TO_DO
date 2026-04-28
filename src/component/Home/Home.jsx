import React from 'react';
import TaskList from '../TaskList/TaskList';



const Home = () => {
    return (
        <div class="max-w-6xl mx-auto mt-6">

            <div class="bg-white shadow-md rounded-xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                {/* <!-- LEFT: Add Task --> */}
                <div class="flex flex-wrap items-center gap-3">
                    <input
                        type="text"
                        placeholder="Add or edit task..."
                        class="border border-gray-300 px-3 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <button
                        class="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
                    >
                        Add Task
                    </button>
                </div>

                {/* <!-- RIGHT: Search + Filter --> */}
                <div class="flex flex-wrap items-center gap-3">
                    <input
                        type="text"
                        placeholder="Search task..."
                        class="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    <select
                        class="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        <option>All Tasks</option>
                        <option>Completed</option>
                        <option>Active</option>
                    </select>
                </div>

            </div>
              
              <div>
                <TaskList></TaskList>
              </div>
        </div>
        
    );
};

export default Home;