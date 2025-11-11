export default function DayBlock({ date, trainings, removeTraining }) {
  return (
    <div className="p-4 rounded-lg border border-[var(--vite-purple)] bg-[var(--graphite)]">
      <h3 className="font-bold text-2xl text-[var(--vite-purple)] mb-3">{date}</h3>
      <ul className="mt-2 space-y-2 ">
        {trainings.map((t, i) => {
          const voce = `${t.category}: ${t.exercise}`;
          return (
            <li
              key={i}
              className="ml-4 text-[var(--text-primary)] flex justify-between items-center text-center text-xl"
            >
              <span>{voce}</span>
              <button
                onClick={() => removeTraining(t.date, voce)}
                className="ml-2 mt-4 text-red-600 hover:text-red-800 font-bold bg-gray-300 hover:bg-gray-400 rounded-full p-2"
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
