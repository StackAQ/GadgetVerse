import { cn } from "@/lib/utils";

export function Button({ className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "px-5 py-2 rounded-lg bg-accent text-white hover:bg-sky-400 transition",
        className
      )}
      {...props}
    />
  );
}
