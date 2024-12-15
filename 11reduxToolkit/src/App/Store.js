import {configureStore} from '@reduxjs/toolkit';
import todoreducer from '../Features/Todo/TodoSlice';

export const store= configureStore({
    reducer:todoreducer
})