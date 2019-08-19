
import app from "../../app";

after("after", function () {
  app.close();
});
