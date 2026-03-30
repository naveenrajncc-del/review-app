import { useState } from 'react';
import type { ReviewItem } from '../types/review';
import { reviewCodeAPI } from '../service/api';

export const useReview = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const runReview = async (code: string) => {
    if (!code) return;

    try {
      setLoading(true);
      setError('');

      const data = await reviewCodeAPI(code);
      setReviews(data);
    } catch (err: any) {
      setError(err.message || 'Review failed');
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  return { reviews, loading, error, runReview };
};