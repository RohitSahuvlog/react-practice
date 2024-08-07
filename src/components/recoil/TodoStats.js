import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from './selectors';

const TodoStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    return (
        <ul>
            <li>Total items: {totalNum}</li>
            <li>Items completed: {totalCompletedNum}</li>
            <li>Items not completed: {totalUncompletedNum}</li>
            <li>Percent completed: {Math.round(percentCompleted * 100)}%</li>
        </ul>
    );
};

export default TodoStats;
