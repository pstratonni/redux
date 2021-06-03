import { CHANGE_PERSON, ADD_PERSON } from "./typesList";

const initState = {
  person: {
    id: "",
    fName: "",
    lName: "",
    phone: "",
  },
  persons: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_PERSON:
    
      const {name,value}=action.payload
      return { ...state, person: { ...state.person, [name]: value } };
    case ADD_PERSON:
      const _arr = [...state.persons, { ...state.person, id: Date.now() }];
      return {
        ...state,
        persons: _arr,
        person: { id: "", fName: "", lName: "", phone: "" },
      };
    default:
      return state;
  }
};
export default reducer;
