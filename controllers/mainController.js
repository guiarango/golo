//Controller in charge of managing the home webpage
mainController = {
  displayPage: function (req, res) {
    res.render("home");
  },
};

//Object is exported
module.exports = mainController;
