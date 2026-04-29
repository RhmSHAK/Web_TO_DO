import React, { useContext, useEffect, useState } from 'react';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Home = () => {

    const { user } = useContext(AuthContext);

    const [tasks, setTask] = useState([]);



    useEffect(() => {

        if (!user?.email) return;

        fetch(`http://localhost:3000/api/tasks?email=${user.email}`)
            .then(res => res.json())
            .then(data => setTask(data));

    }, [user?.email]);


    const handleAddTask = (e) => {
        e.preventDefault();

        if (!user?.email) return;

        const task = e.target.text.value;

        const Task = {
            task,
            email: user.email
        };

        fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(Task)
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Task._id = data.insertedId;
                    const newTask = [...tasks, Task];
                    setTask(newTask);
                    e.target.reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Add Task Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });

                }
            });
    };

    return (
        <div className="max-w-6xl mx-auto mt-6">

            <form onSubmit={handleAddTask} className="flex items-center justify-center gap-3">
                <input
                    type="text"
                    name="text"
                    placeholder="Add  task..."
                    class="border border-gray-300 px-3 py-2 rounded w-64 focus:outline-none focus:ring-2 focus:ring-green-400" />

                <button className="bg-green-600 text-white px-5 py-2 rounded">
                    Add
                </button>
            </form>

            {
                user ?

                    <div>
                        {
                            tasks.map(task =>
                                <TaskList
                                    key={task._id}
                                    task={task}
                                    tasks={tasks}
                                    setTask={setTask}
                                />
                            )
                        }
                    </div>
                    :
                    <p className="text-4xl font-bold text-red-400 text-center mt-15">Please LogIn/Register. <br /> Then added Task will be shown in the task list</p>
            }

        </div>
    );
};

export default Home;