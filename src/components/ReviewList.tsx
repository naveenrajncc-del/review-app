import type { ReviewItem } from "../types/review";

const ReviewList = ({ reviews }: { reviews: ReviewItem[] }) => {
  if (!reviews.length) return null;

  return (
    <div>
      <h3>Issues Found</h3>
      {reviews.map((r, i) => (
        <div key={i}>
          Line {r.line}: {r.comment} ({r.severity})
        </div>
      ))}
    </div>
  );
};

export default ReviewList;