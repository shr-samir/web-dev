import { Task } from './Task';

export interface TaskItem {
  list: Task[];

  getTaskById: (id: string) => Task | null;
  getTaskByIndex: (index: number) => Task | null;

  addTask: (task: Task) => Task[];
  removeFromList: (id: string) => void;
}

export class TaskList implements TaskItem {
  list: Task[];

  constructor(tasks?: Task[]) {
    this.list = tasks || [];
  }

  addTask = (task: Task) => {
    this.list.push(task);
    console.log(this.list);

    return this.list;
  };

  getTaskById = (id: string) => {
    return this.list.find((item) => item.id === id) || null;
  };

  removeFromList(id: string) {
    const index = this.list.findIndex((item) => item.id === id);
    this.list.splice(index, 1);
  }

  getTaskByIndex = (index: number) => {
    return this.list[index] || null;
  };
}
