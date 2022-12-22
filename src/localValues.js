const TODOS_KEY = 'toDos';
const TODONES_KEY = 'toDones';

export const loadInitialValues = () => {
  const loadToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
  const loadToDones = JSON.parse(localStorage.getItem(TODONES_KEY));

  return { initialToDo: loadToDos || [], initialToDone: loadToDones || [] };
};

export const saveValues = (toDos, toDones) => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  localStorage.setItem(TODONES_KEY, JSON.stringify(toDones));
};