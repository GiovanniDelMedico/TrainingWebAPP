export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay scuro */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenuto del modale */}
      <div className="relative bg-[var(--graphite-light)] text-[var(--text-primary)] rounded-xl shadow-2xl max-w-lg w-full p-6 border border-[var(--vite-purple)] ">
        <h2 className="text-2xl  font-bold text-[var(--vite-purple)] mb-4">
          {title}
        </h2>

        <div className="modal-content space-y-4 max-h-[70vh] overflow-y-auto pr-2">{children}</div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[var(--vite-purple)] hover:text-[var(--vite-purple-dark)] text-2xl font-bold"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
