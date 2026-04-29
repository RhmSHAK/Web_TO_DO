import React, { useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2';

const TaskList = ({ task, tasks, setTask }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.task);


    const handleDelete = (id) => {

        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.deletedCount > 0) {

                            const deleteTask = tasks.filter(t => t._id !== id);
                            setTask(deleteTask);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Add Task has been deleted.",
                                icon: "success"
                            });

                        }
                    }
                });



            })
            .catch(err => console.log(err));
    };


    const handleUpdate = (id) => {

        // if (!newText.trim()) return;

        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ task: newText })
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {

                    const updated = tasks.map(t =>
                        t._id === id ? { ...t, task: newText } : t
                    );

                    setTask(updated);
                    setIsEditing(false);

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Update Task Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="max-w-4xl mx-auto mt-4">

            <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">


                <div className="flex items-center gap-3">

                    {
                        isEditing ? (
                            <input
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                className="border px-2 py-1 rounded w-64"
                            />
                        ) : (
                            <span className="text-gray-800 font-medium">
                                {task.task}
                            </span>
                        )
                    }

                </div>


                <div className="flex items-center gap-5">

                    {
                        isEditing ? (
                            <button
                                onClick={() => handleUpdate(task._id)}
                                className="text-green-600 font-semibold"
                            >
                                Update
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="text-blue-600 hover:text-blue-800"
                            >
                                <FaEdit size={20} />
                            </button>
                        )
                    }

                    <button
                        onClick={() => handleDelete(task._id)}
                        className="text-red-600 hover:text-red-800"
                    >
                        <FaTrash size={20} />
                    </button>

                </div>

            </div>

        </div>
    );
};

export default TaskList;