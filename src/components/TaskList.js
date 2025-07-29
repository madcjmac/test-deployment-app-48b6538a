import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete, onToggleComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <h2>📋 Task List</h2>
        <div className="empty-state">
          <p>🎯 No tasks yet!</p>
          <p>Add your first task above to get started.</p>
        </div>
      </div>
    );
  }

  const incompleteTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list">
      <h2>📋 Task List ({tasks.length} total)</h2>
      
      {incompleteTasks.length > 0 && (
        <div className="task-section">
          <h3>🔄 Active Tasks ({incompleteTasks.length})</h3>
          <div className="tasks">
            {incompleteTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="task-section">
          <h3>✅ Completed Tasks ({completedTasks.length})</h3>
          <div className="tasks">
            {completedTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;