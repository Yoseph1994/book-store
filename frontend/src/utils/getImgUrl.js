function getImgUrl(book) {
  return new URL(`/src/assets/assets/books/${book}`, import.meta.url);
}

export { getImgUrl };
