export const Instagram = (url) => {
  try {
    if (url === "" || url === undefined) {
      return "url undefined";
    }

    let id = undefined;
    const splitUrl = url.split("/");

    if (splitUrl[2] === "www.instagram.com") {
      id = splitUrl[4];
    }

    return { id };
  } catch (err) {
    return err;
  }
};
