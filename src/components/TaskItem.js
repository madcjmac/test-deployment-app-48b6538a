import React from 'react';

function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
  const priorityEmoji = {
    low: '🟢',
    medium: '🟡', 
    high: '🔴'
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''} ${isOverdue ? 'overdue' : ''}`}>
      <div className="task-content">
        <div className="task-header">
          <h4 className="task-title">
            {task.title}
            {priorityEmoji[task.priority]} 
            {task.priority}
          </h4>
          <div className="task-meta">
            {task.dueDate && (
              <span className={`due-date ${isOverdue ? 'overdue' : ''}`}>
                📅 {formatDate(task.dueDate)}
                {isOverdue && ' (Overdue!)'}
              </span>
            )}
          </div>
        </div>
        
        {task.description && (
          <p className="task-description">{task.description}</p>
        )}
        
        <div className="task-footer">
          <span className="created-date">
            Created: {formatDate(task.createdAt)}
          </span>
        </div>
      </div>

      <div className="task-actions">
        <button
          className={`btn btn-toggle ${task.completed ? 'btn-undo' : 'btn-complete'}`}
          onClick={() => onToggleComplete(task.id)}
          title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {task.completed ? '↩️' : '✅'}
        </button>
        
        <button
          className="btn btn-edit"
          onClick={() => onEdit(task)}
          title="Edit task"
        >
          ✏️
        </button>
        
        <button
          className="btn btn-delete"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TaskItem;