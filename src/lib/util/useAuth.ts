import { changeField, initializeForm } from './../../modules/auth/actions';
import { RootState } from './../../modules/index';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from 'react';

export default function useAuth(type: string) {
    const auth = useSelector((state: RootState) => state.auth[type]);
    const dispatch = useDispatch();

    const onChange = useCallback((e) => {
        dispatch(changeField({
            type,
            event: e.target
        }));
    },[dispatch, type]);

    useEffect(() => {
        return () => {
            dispatch(initializeForm(type));
        }
    },[dispatch, type]);

    return {
        auth,
        onChange,
    }
}