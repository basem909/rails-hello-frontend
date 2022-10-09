const api = "https://backend-hello-rails.herokuapp.com/api/v1/greetings";

const greetingsShow = async () => {
  const greeting = await fetch(api, { method: "GET" });
  const greetingToDay = await greeting.json();
  return greetingToDay;
};

export default greetingsShow;
