import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface Review {
  author: string;
  initials: string;
  rating: number;
  text: string;
  petInfo: string;
  date: string;
}

const ProviderReviews = ({ reviews, overallRating }: { reviews: Review[]; overallRating: number }) => {
  const ratingCounts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-5">Avaliações</h2>

      <div className="bg-card rounded-2xl shadow-card p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-display font-bold text-4xl text-foreground">{overallRating}</span>
          <div>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className={`w-5 h-5 ${s <= Math.round(overallRating) ? "fill-primary text-primary" : "text-border"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-0.5">{reviews.length} avaliações</p>
          </div>
        </div>
        <div className="space-y-2">
          {ratingCounts.map(({ star, count }) => (
            <div key={star} className="flex items-center gap-2 text-sm">
              <span className="w-3 text-muted-foreground">{star}</span>
              <Star className="w-3 h-3 fill-primary text-primary" />
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: reviews.length ? `${(count / reviews.length) * 100}%` : "0%" }}
                />
              </div>
              <span className="w-6 text-muted-foreground text-right">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card rounded-2xl shadow-card p-5"
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary text-primary font-display font-bold text-sm flex items-center justify-center shrink-0">
                {review.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-semibold text-foreground text-sm">{review.author}</h4>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex gap-0.5 my-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className={`w-3 h-3 ${s <= review.rating ? "fill-primary text-primary" : "text-border"}`} />
                  ))}
                </div>
                <p className="text-sm text-foreground mt-1">{review.text}</p>
                <p className="text-xs text-muted-foreground mt-2">{review.petInfo}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProviderReviews;
