// Back-end URL.
export const base = "https://localhost:3001";

// LibraryController endpoints.
export const library = {
  searchBook: "/api/Library/searchbook",
  getBook: "/api/library/getbook",
};

// AuthController endpoints.
export const auth = {
  login: "/api/auth/login",
  register: "/api/auth/register",
  refresh: "/api/auth/refresh",
  logout: "/api/auth/logout", // Currentl inactive
};

// UserController endpoints.
export const user = {
  borrow: "/api/user/borrowbook",
  borrowReserve: "/api/user/borrowreservedbook",
  return: "/api/user/returnbook",
  reserve: "/api/user/reservebook",
  cancel: "/api/user/canceldesire",
};

// AdminController endpoints.
export const admin = {
  desires: "/api/admin/getalldesires",
  borrowedBooks: "/api/admin/getborrowedbooks",
  reservedBooks: "/api/admin/getReservedbooks",
  acceptBorrow: "/api/admin/acceptborrow",
  acceptReserveBorrow: "/api/admin/acceptreserveborrow",
  acceptReturn: "/api/admin/acceptreturn",
  reject: "/api/admin/rejectdesire",
  addBook: "/api/admin/addbook",
  addPublisher: "/api/admin/addpublisher",
  addAuthor: "/api/admin/addauthor",
  addCategory: "/api/admin/addcategory",
};
