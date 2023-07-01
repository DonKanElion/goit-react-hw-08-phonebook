import { useSelector } from "react-redux";
import {
    selectUser,
    selectIsLoggedIn,
    selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
    return {
        isLoggedIn: useSelector(selectIsLoggedIn),
        selectIsRefreshing: useSelector(selectIsRefreshing),
        user: useSelector(selectUser),
    };
};
