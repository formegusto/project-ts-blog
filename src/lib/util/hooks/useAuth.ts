import { register, login } from './../../../modules/auth/actions';
import { RootState } from './../../../modules/index';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';

export default function useAuth() {
    const auth = useSelector((state: RootState) => state.auth);
    const input = useSelector((state: RootState) => state.input);
    const dispatch = useDispatch();

    const onRegister = useCallback((e) => {
        e.preventDefault();
        dispatch(register({
            username: input.form.username, 
            password: input.form.password
        }));
    }, [dispatch, input]);

    const onLogin = useCallback((e) => {
        e.preventDefault();
        dispatch(login({
            username: input.form.username,
            password: input.form.password
        }));
    },[dispatch, input]);

    useEffect(() => {
        if(auth.authError) {
            console.log('오류발생');
            console.log(auth.authError);
        }
        if(auth.auth) {
            console.log('auth 성공');
            console.log(auth);
        }
    }, [auth]);

    return {
        auth,
        onLogin,
        onRegister,
    };
}