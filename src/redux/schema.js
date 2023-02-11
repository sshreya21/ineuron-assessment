export const schema = {
  FETCH_HOME_DATA: ({ isSuccess }) => {    
    let url = isSuccess
      ? `${window.location.origin}/stubs/homeAPI.json`
      : `${window.location.origin}/stubs/homeAPIs.json`;    
    return {
      props: "home",
      url,
      method: "GET"      
    };
  },
};
