import { Category } from "./Category";
import { Course } from "./Course";
import { Episode } from "./episode";

Category.hasMany(Course);

Course.belongsTo(Category);

Course.hasMany(Episode);

Episode.belongsTo(Course);

export { Category, Course, Episode };
