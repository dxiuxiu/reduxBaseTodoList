export interface IStoreState {
    todos: any[];
    visibilityFilter: VisibilityFilters;
  }
  
  // export const enum VisibilityFilters {
  export enum VisibilityFilters {
    SHOW_ALL = 'SHOW_ALL',
    SHOW_COMPLETED = 'SHOW_COMPLETED',
    SHOW_ACTIVE = 'SHOW_ACTIVE'
  }
  

// export class Todo {
//     public completed: boolean;
//     public id: number;
//     public text: string;
// }