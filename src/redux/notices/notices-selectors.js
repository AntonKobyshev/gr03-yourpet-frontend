export const getAllNotices = ({ notices }) => notices.items;
export const getNoticesById = ({ notices }) => notices.item;
export const getNoticesByIdOwner = ({ notices }) => notices.owner;
export const selectCategory = (store) => store.notices.category;
export const selectNoticesTotalPages = (store) => store.notices.totalPages;
export const selectNoticesPage = (store) => store.notices.page;
export const getAllFavoriteNotices = ({ notices }) => notices.itemsFavorite;
export const selectNoticesLoading = (store) => store.notices.loading;
export const selectKeyword = (store) => store.notices.keyword;
