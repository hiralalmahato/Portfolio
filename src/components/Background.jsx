export default function Background() {
  return (
    <div
      className="fixed inset-0 z-0 min-h-screen w-full overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 90%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
          repeating-linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 80px
          ),
          repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 1px,
            transparent 80px
          ),
          #0b0b0b
        `,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Blur overlay for gradient smoothness */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 60%),radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 60%),radial-gradient(circle at 40% 90%, rgba(34, 197, 94, 0.05) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}
