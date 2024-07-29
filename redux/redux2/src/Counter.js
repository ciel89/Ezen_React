// action value
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const PLUS_N = "PLUS_N";
const MINUS_N = "MINUS_N";

// action creator : action value를 리턴하는 함수
export const plusOne = (() => {
    return {
        type: PLUS_ONE,
    }
});

export const minusOne = (() => {
    return {
        type: MINUS_ONE,
    }
});

export const plusN = (payload) => {
    return {
        type: PLUS_N,
        payload
    }
};

export const minusN = (payload) => {
    return {
        type: MINUS_N,
        payload
    }
};

// 초기 상태값(state)
// const [number, setNmber] = useState(0);
const initialState = {
    number: 0
}

// 리듀서 : 'state에 변화를 일으키는' 함수

const counter = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };
        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        case PLUS_N:
            return {
                number: state.number + action.payload
            };
        case MINUS_N:
            return {
                number: state.number - action.payload
            };
        default:
            return state;
    }
}

export default counter;