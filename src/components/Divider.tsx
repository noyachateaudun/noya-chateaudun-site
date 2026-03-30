export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 max-w-[180px] mx-auto my-9 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold/40" />
      <div className="w-[5px] h-[5px] rotate-45 bg-gold opacity-60" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
