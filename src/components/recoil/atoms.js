import { atom } from "recoil";


export const todoListState = atom({
    key: 'todoListState',
    default: [
        {
            id: 1,
            text: 'Learn Recoil',
            isComplete: true,
        },
        {
            id: 2,
            text: 'Build a cool project',
            isComplete: false,
        },
    ],
});