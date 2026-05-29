export const workspaceRoles = ['owner', 'admin', 'member', 'viewer'] as const;
export const projectStatuses = ['planned', 'active', 'paused', 'archived'] as const;
export const taskStatuses = ['todo', 'in_progress', 'in_review', 'done'] as const;
export const taskPriorities = ['low', 'medium', 'high', 'urgent'] as const;
export const notificationTypes = ['mention', 'assignment', 'task_update', 'comment', 'system'] as const;
export const activityTypes = [
  'workspace_created',
  'project_created',
  'task_created',
  'task_updated',
  'task_moved',
  'task_deleted',
  'comment_added',
  'snippet_added',
  'wiki_updated'
] as const;