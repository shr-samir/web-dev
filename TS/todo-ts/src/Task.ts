import { ID_LENGTH } from './constants';
import { getRandomId } from './utils';

export interface TaskProps {
  id: string;
  text: string;
  completed: boolean;
}

export class Task implements TaskProps {
  id: string;
  text: string;
  completed: boolean;
  constructor(text = '', taskStatus = false) {
    this.id = getRandomId(ID_LENGTH);
    this.text = text;
    this.completed = taskStatus;
  }

  toggleCompleted = () => {
    this.completed = !this.completed;
  };

  setCompleted = (completed: boolean = true) => {
    this.completed = completed;
  };

  getCompleted = () => {
    return this.completed;
  };

  setValue = (text: string) => {
    this.text = text;
  };

  getValue = () => {
    return this.text;
  };
}
