import server from "./src/server";

const port = process.env.APP_PORT || 3000;

export default server.listen(port, () => {
  console.log(`Server is running on the port ${port}!`);
});
