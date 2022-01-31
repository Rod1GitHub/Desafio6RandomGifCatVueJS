export const URL_API_1 = "https://cataas.com/cat/gif/says/";
export const URL_API_2 = (title, filter, color, size) =>
  `${title}?filter=${filter}&color=${color}&size=${size}&type=or`;

export const fetchApiUrlWithUserOptions = async (
  title,
  filter,
  color,
  size
) => {
  console.log("2.fetchApiUrlWithUserOptions");
  return await fetch(`${URL_API_1}${URL_API_2(title, filter, color, size)}`)
    .then((response) => {
      console.log(response.url);
      return response.url;
    })
    .catch((error) => {
      console.error({ error });
    });
};
