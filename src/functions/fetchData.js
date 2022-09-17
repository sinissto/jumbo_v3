export const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (response.ok === false) {
      throw new Error("Nesto si sjebao!!!");
    }

    const data = response.json();

    return data;
  } catch (err) {
    return err.message;
    console.log(err.message);
  }
};
