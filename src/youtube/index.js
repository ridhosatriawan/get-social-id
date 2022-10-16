const Youtube = (url) => {
  try {
    if (url === "" || url === undefined) {
      return "url undefined";
    }

    let id = undefined;
    const splitUrl = url.split("/");

    if (splitUrl[2] === "www.youtube.com" && splitUrl[3] !== "embed") {
      id = splitUrl[3].split("=")[1];
    }

    if (splitUrl[2] === "youtu.be") {
      id = splitUrl[3];
    }

    if (splitUrl[2] === "www.youtube.com" && splitUrl[3] === "embed") {
      id = splitUrl[4];
    }

    return { id };
  } catch (err) {
    return err;
  }
};

module.exports = Youtube;
