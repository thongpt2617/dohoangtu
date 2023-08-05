export interface ICourse {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  teacherName: string;
  rating?: number;
  ratingCount?: number;
  hours: number;
  lessons: number;
  tag?: ICourseTag;
  price: number;
  previousPrice: number | null;
  updatedAt: string;
  courseDetailsId: string;
  slug?: string;
  studentIds?: string[];
  showInStore?: boolean;
}

export type INewCourse = Omit<ICourse, "id" | "rating" | "ratingCount"> & {
  thumbnailFile?: File | null;
};

export enum ICourseTag {
  bestSeller = "Bestseller",
  hotAndNew = "Hot & new",
}

export enum ICourseLessonType {
  video = "video",
  assignment = "assignment",
}

export interface ICourseLesson {
  order: number | string;
  name: string;
  type: ICourseLessonType;
  duration: number;
  dyntubeKey: string;
  dyntubeVideoId?: string;
}

export interface ICourseSection {
  order: number;
  name: string;
  lessons: ICourseLesson[];
}
export interface ICourseDetails {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  teacherName: string;
  rating?: number;
  ratingCount?: number;
  hours: number;
  courseId?: string;
  sections: ICourseSection[];
  overview?: string;
}

export type INewCourseDetails = Omit<ICourseDetails, "id"> & {
  thumbnailFile?: File | null;
};

export interface IStudentCourse {
  id?: string;
  courseId: string;
  courseDetailsId: string;
  progress: number;
  name: string;
  teacherName: string;
  rating: number | null;
  price: ICourse["price"];
  thumbnailUrl: ICourse["thumbnailUrl"];
  viewsCount?: {
    [dynTubeKey: string]: number;
  } | null;
}

export enum ICourseFormFields {
  name = "name",
  description = "description",
  overview = "overview",
  thumbnailUrl = "thumbnailUrl",
  thumbnailFile = "thumbnailFile",
  teacherName = "teacherName",
  hours = "hours",
  lessons = "lessons",
  price = "price",
  previousPrice = "previousPrice",
  sections = "sections",
  showInStore = "showInStore",
}
export interface ICourseFormValues {
  [ICourseFormFields.name]: string;
  [ICourseFormFields.description]: string;
  [ICourseFormFields.overview]?: string;
  [ICourseFormFields.thumbnailUrl]: string;
  [ICourseFormFields.thumbnailFile]: File | null;
  [ICourseFormFields.teacherName]: string;
  [ICourseFormFields.hours]: number;
  [ICourseFormFields.lessons]: number;
  [ICourseFormFields.price]: number;
  [ICourseFormFields.previousPrice]: number | null;
  [ICourseFormFields.sections]: ICourseSection[];
  [ICourseFormFields.showInStore]?: boolean;
}

export type IDisabledLesson = {
  sectionOrder: number;
  lessonOrder: number | string;
};
