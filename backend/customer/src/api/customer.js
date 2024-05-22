const CustomerService = require("../services/customer-service");
const UserAuth = require("./middlewares/auth");
const { SubcribeMessage } = require("../utils");
module.exports = (app, channel) => {
  const service = new CustomerService();

  SubcribeMessage(channel, service);

  app.post("/signup", async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const { data } = await service.SignUp({ username, email, password });
      return res.json(data);
    } catch (err) {
      next(err);
    }
  });

  app.post("/login", async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const { data } = await service.SignIn({ email, password });
      const cookieOptions = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      console.log(data);
      console.log(cookieOptions);
      res.cookie("jwt", data.token, cookieOptions);
      console.log("pass");

      return res.status(200).json({ user: data.customer, token: data.token });
    } catch (err) {
      next(err);
    }
  });
  app.get("/logout", async (req, res, next) => {
    try {
      res.cookie("jwt", "logout", {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true,
      });
      return res.status(200).json({ message: "logout" });
    } catch (err) {
      next(err);
    }
  });

  app.get("/profile", UserAuth, async (req, res, next) => {
    try {
      const { _id } = req.user;
      const { data } = await service.GetProfile({ _id });
      return res.json(data);
    } catch (err) {
      next(err);
    }
  });
  app.post("/update", UserAuth, async (req, res, next) => {
    try {
      const { _id } = req.user;
      const { data } = await service.UpdateProfile({
        id: _id,
        update: req.body,
      });
      return res.json(data);
    } catch (err) {
      next(err);
    }
  });
  app.get("/shoping-details", UserAuth, async (req, res, next) => {
    try {
      const { _id } = req.user;
      const { data } = await service.GetShopingDetails(_id);

      return res.json(data);
    } catch (err) {
      next(err);
    }
  });

  app.get("/wishlist", UserAuth, async (req, res, next) => {
    try {
      const { _id } = req.user;
      const { data } = await service.GetWishList(_id);
      return res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  });
};
