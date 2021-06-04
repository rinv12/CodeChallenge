export function submitInfo(data) {
  //const env = runtimeEnv();
  return (dispatch) => {
    return fetch(`https://gewwo.csb.app`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
      mode: "cors"
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((res) => {
        dispatch(submitInfo(data));
      })
      .catch((e) => console.log(e));
  };
}
