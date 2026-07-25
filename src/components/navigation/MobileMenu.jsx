
import navigation from "@data/navigation";

export default function MobileMenu({
  open,
  onClose,
  onNavigate,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden">
      <div className="absolute right-0 top-0 h-full w-72 bg-zinc-950 p-8">

        <button
          className="mb-8 text-zinc-400"
          onClick={onClose}
        >
          Close
        </button>

        <div className="space-y-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="block w-full rounded-xl px-4 py-3 text-left text-white hover:bg-white/5"
            >
              {item.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

