import fetchAPI from './FetchAPI';

const GET_CONTINENTS = 'GET_CONTINENTS';
const GET_CONTINENTS_SUCCESS = 'GET_CONTINENTS_SUCCESS';
const GET_CONTINENTS_FAILURE = 'GET_CONTINENTS_FAILURE';

export const getContinents = () => (dispatch) => {
  dispatch({ type: GET_CONTINENTS });

  const fetchContinent = async () => {
    try {
      const continents = await fetchAPI();
      const payload = continents.map((continent) => ({
        id: continent.continent,
        name: continent.continent,
      }));
      dispatch({ type: GET_CONTINENTS_SUCCESS, payload });
    } catch (e) {
      dispatch({
        type: GET_CONTINENTS_FAILURE,
        payload: 'error',
      });
    }
  };
  fetchContinent();
};

const initialState = {
  continents: [], loading: true, error: null,
};

export const continentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTINENTS:
      return { ...state, loading: true };
    case GET_CONTINENTS_SUCCESS:
      return { ...state, loading: false, continent: action.payload };
    case GET_CONTINENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
