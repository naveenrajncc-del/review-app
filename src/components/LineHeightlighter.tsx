import type { ReviewItem } from "../types/review";

type Props = {
  code: string;
  reviews: ReviewItem[];
};

const LineHighlighter = ({ code, reviews }: Props) => {
  const lines = code.split('\n');

  const getReview = (lineNumber: number) =>
    reviews.find((r) => r.line === lineNumber);

  return (
    <pre>
      {lines.map((line, index) => {
        const review = getReview(index + 1);

        return (
          <div
            key={index}
            style={{
              background: review ? '#ffe6e6' : 'transparent',
            }}
          >
            <span>{index + 1}</span> {line}
            {review && (
              <div>
                💬 {review.comment} ({review.severity})
              </div>
            )}
          </div>
        );
      })}
    </pre>
  );
};

export default LineHighlighter;