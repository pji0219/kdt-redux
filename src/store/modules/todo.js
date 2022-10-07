// 초기 값 설정
const initState = {
  list: [
    {
      id: 0,
      text: '리덕스 포기하지 않기',
      done: false,
    },
    {
      id: 1,
      text: '코딩 하기',
      done: false,
    },
    {
      id: 2,
      text: '학원 가기',
      done: false,
    },
  ],
};

// 액션 타입 정의 하기
const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

// 리듀서 선언하기
export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((el) => {
          if (el.id === action.id) {
            return {
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
