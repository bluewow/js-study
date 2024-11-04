const fetchData = async () => {
  return await fetch("https://jsonplaceholder.typicode.com/posts");
};

fetchData().then((res) => console.log(res));
