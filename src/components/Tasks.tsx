import { useState } from 'react'
import { useStore } from '@tanstack/react-store'
import { appStore, addTask } from '../store/appStore'
import { ListChecks, PlusCircle } from 'lucide-react'

function Tasks() {
  const tasks = useStore(appStore, (state) => state.tasks)
  const theme = useStore(appStore, (state) => state.theme)
  const [newTask, setNewTask] = useState('')

  const handleAddTask = () => {
    if (newTask.trim()) {
      addTask(newTask.trim())
      setNewTask('')
    }
  }

  return (
    <div className={`min-h-[calc(100vh-4.5rem)] ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-100 text-gray-900'
    }`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <ListChecks size={32} className="text-cyan-500" />
            <h1 className="text-3xl font-bold">Lista de Tareas</h1>
          </div>

          {/* Add Task Form */}
          <div className={`p-6 rounded-lg border mb-8 ${
            theme === 'dark' 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-300'
          }`}>
            <div className="flex gap-4">
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Añadir nueva tarea..."
                className={`grow flex p-3 rounded-md border ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
              />
              <button
                onClick={handleAddTask}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-cyan-500 text-white hover:bg-cyan-600 transition-colors"
              >
                <PlusCircle size={20} />
                <span>Añadir</span>
              </button>
            </div>
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border flex items-center ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                }`}
              >
                <span className="grow flex">{task}</span>
              </div>
            ))}
            {tasks.length === 0 && (
              <p className={`text-center ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                No hay tareas pendientes. ¡Añade una nueva!
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tasks
