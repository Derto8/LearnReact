import { useReducer } from "react";
import { IReviewFormData } from "../../dataModels/IReviewFormData";


const INITIAL_FORM: IReviewFormData= {
    name: "",
    text: "",
    rating: 0
};

enum ActionKind {
    SET_NAME_ACTION = 'setName',
    SET_TEXT_ACTION = 'setText',
    SET_RATING_ACTION = "setRating",
    CLEAR_ACTION = "clear"
  }

type Action = {
    type: ActionKind,
    payload?: string
}

const reducer = (state: IReviewFormData, action: Action) => {
    switch(action.type){
        case ActionKind.SET_NAME_ACTION:
            return{
                ...state,
                name: action.payload
            };
        case ActionKind.SET_TEXT_ACTION:
            return{
                ...state,
                text: action.payload
            };
        case ActionKind.SET_RATING_ACTION:
            return{
                ...state,
                rating: Number(action.payload)
            };
        case ActionKind.CLEAR_ACTION:
            return INITIAL_FORM;
        default: 
            return state;
    }
}

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

    const onNameChange = (name: string) => {
        dispatch({type: ActionKind.SET_NAME_ACTION, payload: name})
    }

    const onTextChange = (text: string) => {
        dispatch({type: ActionKind.SET_TEXT_ACTION, payload: text})
    }

    const onRatingChange = (rating: string) => {
        dispatch({type: ActionKind.SET_RATING_ACTION, payload: rating})
    }

    const onClear = () => {
        dispatch({type: ActionKind.CLEAR_ACTION})
    }

    return {
        form,
        onNameChange,
        onTextChange,
        onRatingChange,
        onClear
    }
}