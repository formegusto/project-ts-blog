import { changeField, initializeForm } from '../../../modules/common/input/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules/index';
import { useEffect, useCallback } from 'react';

export default function useInput(initState : any) {
    const input = useSelector((state: RootState) => state.input);
    const dispatch = useDispatch();

    const onChange = useCallback((target) => {
        dispatch(changeField(target))
    }, [dispatch]);

    useEffect(() => {
        dispatch(initializeForm(initState));
        return () => {
            dispatch(initializeForm({}));
        }
    },[dispatch]); /* eslint-disable-line */
    
    return {
        input,
        onChange
    }
}