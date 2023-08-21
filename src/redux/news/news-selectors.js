export const selectAllNews = state => state.news.items;

export const selectAllNewsTotalPages = state => state.news.totalPages;

export const selectAllNewsPage = state => state.news.page;

export const selectIsLoadingNews = state => state.news.loading;
