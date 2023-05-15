export const ROUTE = {
  auth: "/auth",
  home: "/",
  studentHome: "/student",
  studentCourses: "/student/courses",
  studentCourseView: "/student/courses/[courseDetailsId]/view",
  teacherCourseView: "/teacher/courses/[courseDetailsId]/view",
  teacherHome: "/teacher",
  teacherCourses: "/teacher/courses",
  teacherOrders: "/teacher/orders",
  teacherCoursesNew: "/teacher/courses/new",
  courses: "/courses",
  books: "/books",
  documents: "/documents",
  store: "/store",
  contact: "/contact",
  features: "/features",
  cart: "/cart",
};

export const PUBLIC_ROUTES = [
  ROUTE.home,
  ROUTE.auth,
  ROUTE.courses,
  ROUTE.books,
  ROUTE.documents,
  ROUTE.store,
  ROUTE.contact,
  ROUTE.features,
  ROUTE.cart,
];
