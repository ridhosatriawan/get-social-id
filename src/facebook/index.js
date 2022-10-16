const Facebook = (url) => {
  try {
    if (url === "" || url === undefined) {
      return "url undefined";
    }

    let id = undefined;
    const splitUrl = url.split("/");

    if (splitUrl[2] === "www.facebook.com") {
      id = splitUrl[3].split("=")[1];
    }

    if (splitUrl[2] === "fb.watch") {
      id = splitUrl[3];
    }

    return { id };
  } catch (err) {
    return err;
  }
};

module.exports = Facebook;
