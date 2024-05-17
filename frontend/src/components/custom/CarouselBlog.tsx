import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.webp";
import blog3 from "@/assets/blog-3.webp";
import blog4 from "@/assets/blog-4.webp";
import { BlogCard } from "@/components";

type Blog = {
  title: string;
  content: string;
  image: any;
  date: string;
};

const data: Blog[] = [
  {
    title: " Beautiful Sunday Morning Renaissance",
    content:
      "You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart.",
    image: blog1,
    date: "October 20, 2023",
  },
  {
    title: "Sed Ut Perspiciatis Unde Omnis Renaissance ",
    content:
      "To enjoy alternately the sight of their distress. He really shouted with pleasure; and, shaking Monsieur Du Bois strenuously by the hand, wished him joy of having touched English ground.",
    image: blog2,
    date: "September 22, 2023",
  },
  {
    title: "Vitae Magnis Fusce Laoreet Porttitor Hampden",
    content:
      "You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart.",
    image: blog3,
    date: "April 14, 2023",
  },
  {
    title: "Urna Pretium Elit Mauris Cursus Curabitu",
    content:
      "You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.",
    image: blog4,
    date: "January 15, 2024",
  },
];

const CarouselBlog = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl">Our Latest News</h3>
        <Button variant={"outline"}>
          SEE ALL <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
      <Carousel className="w-full">
        <CarouselContent>
          {data.map((blog, index) => (
            <CarouselItem
              key={index}
              className="sm:basis-1/2 md:basis-1/3 xl:basis-1/4"
            >
              <BlogCard blog={blog} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselBlog;
