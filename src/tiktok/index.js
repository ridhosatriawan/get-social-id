export const Tiktok = (url) => {
  try {
    if (url === "" || url === undefined) {
      return "url undefined";
    }

    let id,
      username = undefined;
    const splitUrl = url.split("/");

    if (splitUrl[2] === "www.tiktok.com") {
      let include = splitUrl[5].includes("?");
      include ? (id = splitUrl[5].split("?")[0]) : (id = splitUrl[5]);
      username = splitUrl[3];
    }

    if (splitUrl[2] === "vm.tiktok.com" || splitUrl[2] === "vt.tiktok.com") {
      id = splitUrl[3];
    }

    return { id, username };
  } catch (err) {
    return err;
  }
};
