export const Twitter = (url) => {
  try {
    if (url === "" || url === undefined) {
      return "url undefined";
    }

    let id,
      username = undefined;
    const splitUrl = url.split("/");

    if (splitUrl[2] === "www.twitter.com" || splitUrl[2] === "twitter.com") {
      let include = splitUrl[5].includes("?");
      include ? (id = splitUrl[5].split("?")[0]) : (id = splitUrl[5]);
      username = splitUrl[3];
    }

    return { id, username };
  } catch (err) {
    return err;
  }
};
