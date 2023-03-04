export const fetchImage = (imgName, page = 1) => {
  return fetch(
    `https://pixabay.com/api/?key=32945062-68d6d40c8d925b295193ffb26&q=${imgName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`error ${this.props.prevProps}`));
  });
};
