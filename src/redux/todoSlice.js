import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [], activeFilter: null },
  reducers: {
    addTask: (state, action) => {
      if (!action.payload.text.trim()) return;
      const newTask = {
        id: nanoid(5),
        text: action.payload.text,
        completed: false,
      };
      state.tasks.unshift(newTask);
    },
    markComplete: (state, action) => {
      state.tasks.filter((el) => {
        if (el.id === action.payload.id) {
          el.completed = !el.completed;
        }
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((el) => el.id !== action.payload.id);
    },

    changeText: (state, action) => {
      state = state.tasks.map((el) => {
        if (el.id === action.payload.id) el.text = action.payload.text;
      });
    },
    completeAll: (state) => {
      if (state.tasks.length === 0) return;
      const tumbler = state.tasks.some((el) => !el.completed);
      state.tasks.map((el) => (el.completed = tumbler));
    },
    clearAll: (state) => {
      state.tasks = [];
    },
    setFilter: (state, action) => {
      state.activeFilter = action.payload.filterName;
    },
  },
});

export const {
  addTask,
  markComplete,
  deleteTask,
  editTask,
  changeText,
  completeAll,
  clearAll,
  setFilter,
} = todoSlice.actions;

export default todoSlice.reducer;