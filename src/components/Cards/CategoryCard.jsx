import { useState } from "react";
import Modal from "../common/Modal.jsx";
import Button from "../common/Button.jsx";
import { useTraining } from "../../context/TrainingProvider.jsx";

export default function CategoryCard({ label, exercises = [], icon }) {
  const [open, setOpen] = useState(false);
  const [manualName, setManualName] = useState("");
  const [feedback, setFeedback] = useState(null);
  const { addTraining } = useTraining();

  const chooseExercise = (name) => {
    addTraining(label, name);
    setFeedback({ text: name, color: "text-sky-400" });
  };

  const chooseRandom = () => {
    if (!exercises.length) return;
    const i = Math.floor(Math.random() * exercises.length);
    const name = exercises[i];
    addTraining(label, name);
    setFeedback({ text: name, color: "text-sky-400" });
  };

  const addManual = () => {
    const name = manualName.trim();
    if (!name) return;
    chooseExercise(name);
    setManualName("");
  };

  return (
    <div
      className="bg-[var(--graphite-light)] 
                w-full max-w-md md:max-w-lg lg:max-w-xl 
                p-6 md:p-8 lg:p-10 
                rounded-2xl shadow-2xl 
                flex flex-col space-y-6 md:space-y-8 
                text-center border border-[var(--vite-purple)]/30"
    >
      {/* Header con icona e titolo */}
      <div className="flex flex-col items-center space-y-2">
        <div className="text-[var(--vite-purple)]">{icon}</div>
        <h2 className="font-semibold text-2xl text-[var(--text-primary)]">
          {label}
        </h2>
      </div>

      {/* Bottone per aprire la lista */}
      <Button variant="primary" onClick={() => setOpen(true)}>
        Mostra esercizi
      </Button>

      {/* Modal con lista esercizi */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={`Esercizi ${label}`}
      >
        <div className="flex flex-col space-y-4">
          {feedback && (
            <div
              className={`font-bold text-2xl ${feedback.color} underline underline-offset-4 text-center`}
            >
              {feedback.text}
            </div>
          )}

          <ul className="space-y-3">
            {(exercises || []).map((ex) => (
              <li key={ex}>
                <Button variant="sky" onClick={() => chooseExercise(ex)}>
                  {ex}
                </Button>
              </li>
            ))}
          </ul>

          {/* Input manuale */}
          <div className="space-y-2">
            <input
              value={manualName}
              onChange={(e) => setManualName(e.target.value)}
              type="text"
              placeholder="Nome esercizio personalizzato"
              className="w-full p-2 border rounded"
            />
            <Button variant="success" onClick={addManual}>
              ➕ Aggiungi esercizio
            </Button>
          </div>

          {/* Azioni */}
          <div className="flex gap-3 flex-col">
            <Button variant="primary" onClick={chooseRandom}>
               🎲 Scegli casualmente
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Chiudi
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
