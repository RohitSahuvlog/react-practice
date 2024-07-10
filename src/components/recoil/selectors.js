import { selector } from "recoil";
import { todoListState } from './atoms';

export const todoListStatsState = selector({
    key: "todoListStatsState",
    get: ({ get }) => {
        // const response = await axios.get('/api/data');
        // const allData = response.data;
        // i want to deal with 5seconds all SetTimeout
        // setTimeout(() => {
        //     console.log("5 seconds passed");
        // }, 10000);

        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;



        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    }
});