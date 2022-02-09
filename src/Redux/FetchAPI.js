const BaseURL = 'https://disease.sh/v3/covid-19/continents';
const fetchAPI = async () => {
  const API = await fetch(BaseURL);
  const data = await API.json();
  return data;
};

export default fetchAPI;
