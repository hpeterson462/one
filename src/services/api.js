export const getApi = () => {
  return fetch('https://the-one-api.dev/v2/character', {
    headers: {
      'Authorization': 'Bearer pvHkTVdmM4UBgOO_K0ag'
    }
  })
    .then(res => res.json())
    .then(json => json.docs);
};

export const getApiById = (id) => {
  return fetch(`https://the-one-api.dev/v2/character/${id}`, {
    headers: {
      'Authorization': 'Bearer pvHkTVdmM4UBgOO_K0ag'
    }
  })
    .then(res => res.json())
    .then(json => json.docs[0]);
};
