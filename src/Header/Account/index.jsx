import React, { useReducer } from 'react';

import SignUp from './SignUp';
import LogIn from './LogIn';
import LogInConfirm from './LogInConfirm';

function reducer(state, action) {
    const { type, payload } = action;
    const { __step, data } = payload;

    switch (type) {
        case 'next':
            return { step: __step, ...data };
        case 'error':
            return state;
        default:
            return state;
    }
}

export default function Account({ setIsLoading }) {
    const [state, dispatch] = useReducer(reducer, { step: 'LogIn' });
    let Component;

    switch (state.step) {
        case 'SignUp':
            Component = SignUp;
            break;
        case 'LogIn':
            Component = LogIn;
            break;
        case 'LogInConfirm':
            Component = LogInConfirm;
            break;
        default:
            Component = LogIn;
    }

    return (
        <Component
            {...state}
            setIsLoading={setIsLoading}
            onNext={(payload) => dispatch({ type: 'next', payload })}
            onError={(payload) => dispatch({ type: 'error', payload })}
        />
    );
}
