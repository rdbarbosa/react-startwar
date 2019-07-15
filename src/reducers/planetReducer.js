const defaultState = {
    texto: "",
    List: [],
    Planet: null
}

export default function(state = defaultState, action) {
    switch (action.type) {
        case "TEXT_CHANGED" :
            return { ...state, texto: action.payload }
        case "FETCH_PLANETS":
            return { ...state, list: action.payload.data }
        case "FETCH_PLANET":
            return { ...state, Planet: action.payload}
        case "SEARCH_PLANET":
            return { ...state, list: action.payload.data }
        default:
            return state;
    }
}