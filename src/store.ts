import { configureStore } from '@reduxjs/toolkit';
import movies from 'slices/movies';
import auth from 'slices/auth';
import cinemas from 'slices/cinemas';
import spinner from 'slices/spinner';


const store = configureStore({
    reducer: {
        movies,
        auth,
        cinemas,
        spinner,
    },
    // devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;