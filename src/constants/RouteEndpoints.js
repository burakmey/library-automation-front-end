//Public Routes.
export const publicRoutes = {
  base: "/",
  login: "/login",
  register: "/register",
  search: "/search",
  reviewBook: "/search/book",
};

// Protected Routes: "User", "Admin".
export const protecteRoutesdUser = {
  profile: "/profile",
  borrowed: "/profile/borrowedBooks",
  fines: "/profile/fines",
  desires: "/profile/waitingDesires",
  reserved: "/profile/reservedBooks",
};

// Protected Routes: "Admin".
export const protectedRoutesAdmin = {
  admin: "/admin",
  addBook: "/admin/addBook",
  updateBook: "/admin/updateBook",
  desires: "/admin/waitingDesires",
  borrowed: "/admin/borrowedList",
  reserved: "/admin/reservedList",
};
