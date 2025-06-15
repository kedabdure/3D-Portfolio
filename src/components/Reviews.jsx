import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Sara Thompson",
    username: "@sara_t",
    body: "The platform is well-structured and very intuitive. I appreciated the responsive design and smooth navigation.",
    img: "https://avatar.vercel.sh/sara",
  },
  {
    name: "Michael Lee",
    username: "@mikelee",
    body: "I had a great experience using the product. It’s efficient and meets the needs of both beginners and experienced users.",
    img: "https://avatar.vercel.sh/michael",
  },
  {
    name: "Fatima Hassan",
    username: "@fatima_h",
    body: "Reliable and easy to use. Customer support was quick and helpful when I had a question.",
    img: "https://avatar.vercel.sh/fatima",
  },
  {
    name: "David Kim",
    username: "@davidkim",
    body: "I’ve tried similar solutions before, but this one offers a balanced, user-focused approach that stands out.",
    img: "https://avatar.vercel.sh/david",
  },
  {
    name: "Amina Yusuf",
    username: "@amina_y",
    body: "The onboarding process was simple and the performance exceeded my expectations. Highly recommend for small businesses.",
    img: "https://avatar.vercel.sh/amina",
  },
  {
    name: "Carlos Ramirez",
    username: "@carlos_r",
    body: "The interface is clean, and the features are exactly what I needed. A reliable tool for daily workflows.",
    img: "https://avatar.vercel.sh/carlos",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors duration-300",
        "border-white/10 bg-white/5 hover:bg-white/10"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">{name}</figcaption>
          <p className="text-xs font-medium text-white/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/70">{body}</blockquote>
    </figure>
  );
};

export function Reviews() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}
