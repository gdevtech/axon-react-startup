import makeStore from '../helpers/makeStore';

export enum ActionTypes {
  fetchTodos,
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodosAction {
  type: ActionTypes.fetchTodos;
  payload: ITodo[];
}

export const todosReducer = (
  draft: ITodo[] = [],
  action: IFetchTodosAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return (draft = action.payload);

    default:
  }
};
