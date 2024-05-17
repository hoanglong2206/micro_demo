import { truncateText } from "@/lib/utils";

interface BlogCardProps {
  blog: any;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md transition">
      <div className="aspect-video rounded-t-lg overflow-hidden cursor-pointer">
        <img
          src={blog.image}
          alt="Banner 1"
          className="w-full object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="space-y-2 p-4">
        <p className="text-base tracking-widest">{blog.date}</p>
        <p className="font-semibold tracking-wider text-lg hover:text-gray-700 dark:hover:text-gray-300 transition cursor-pointer">
          {truncateText(blog.title, 20)}
        </p>
        <p className="text-sm tracking-wide">
          {truncateText(blog.content, 81)}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
