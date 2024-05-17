import { Product } from "@/interfaces";
import { Rating } from "@mui/material";
import moment from "moment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { Reply, ThumbsUp } from "lucide-react";

interface ProductReviewsProps {
  data: Product;
}

const ProductReviews = ({ data }: ProductReviewsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-3xl">Product Reviews</h3>
        <Button variant={"outline"}>Write a Review</Button>
      </div>
      <div className="space-y-6 px-10">
        {data.comments &&
          data.comments.map((comment) => (
            <div key={comment.id} className="space-y-2">
              <div key={comment.id} className="flex items-center gap-x-2">
                <Avatar>
                  <AvatarImage src={comment.user.photo} alt="Avatar" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="font-semibold">{comment.user.name}</div>
                <div className="font-light">
                  {moment(comment.createdDate).fromNow()}
                </div>
              </div>
              <div className="space-x-2">
                <Rating value={comment.rating} readOnly />
                <div>{comment.comment}</div>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="rounded-full"
                  >
                    <ThumbsUp className="w-5 h-5" />
                  </Button>
                  <span>{comment.likes}</span>
                </div>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="rounded-full"
                >
                  <Reply className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductReviews;
