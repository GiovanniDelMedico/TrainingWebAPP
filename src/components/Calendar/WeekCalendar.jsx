import { useTraining } from "../../context/TrainingProvider.jsx";
import DayBlock from "./DayBlock.jsx";

export default function WeekCalendar() {
  const { history, removeTraining } = useTraining();

  // Raggruppa per data
  const grouped = history.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = [];
    acc[item.date].push(item);
    return acc;
  }, {});

  // Ordina le date (dal più recente al più vecchio)
  const sortedDates = Object.keys(grouped).sort((a, b) => {
    const [dayA, monthA, yearA] = a.split("/");
    const [dayB, monthB, yearB] = b.split("/");
    return (
      new Date(`${yearB}-${monthB}-${dayB}`) -
      new Date(`${yearA}-${monthA}-${dayA}`)
    );
  });

  return (
    <div className="p-6 bg-[var(--graphite-light)] rounded-xl border border-[var(--vite-purple)] shadow-xl items-center text-center">
      <h2 className="text-3xl font-bold text-[var(--vite-purple)] mb-6">
        Storico allenamenti
      </h2>

      {sortedDates.length === 0 ? (
        <p className="text-[var(--text-secondary)] text-center">
          Nessun allenamento registrato.
        </p>
      ) : (
        <div className="flex flex-col gap-6">
          {sortedDates.map((date) => (
            <DayBlock
              key={date}
              date={date}
              trainings={grouped[date]}
              removeTraining={removeTraining}
            />
          ))}
        </div>
      )}
    </div>
  );
}
