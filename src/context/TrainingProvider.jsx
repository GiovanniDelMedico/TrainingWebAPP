import { createContext, useContext, useState, useEffect } from "react";

const TrainingContext = createContext();

export function TrainingProvider({ children }) {
  // Stato inizializzato direttamente da localStorage (come in vanilla JS)
  const [history, setHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("storicoAllenamenti")) || [];
  });

  // Ogni volta che history cambia, salviamo in localStorage
  useEffect(() => {
    localStorage.setItem("storicoAllenamenti", JSON.stringify(history));
  }, [history]);

  // Aggiunge un nuovo allenamento
  const addTraining = (category, exercise) => {
    const entry = {
      date: new Date().toLocaleDateString("it-IT", { timeZone: "Europe/Rome" }), 
      category,
      exercise,
    };
    setHistory([...history, entry]);
  };

  // Rimuove un allenamento
  const removeTraining = (date, voce) => {
    setHistory(
      history.filter(
        (item) =>
          !(
            item.date === date &&
            `${item.category}: ${item.exercise}` === voce
          )
      )
    );
  };

  return (
    <TrainingContext.Provider value={{ history, addTraining, removeTraining }}>
      {children}
    </TrainingContext.Provider>
  );
}

export const useTraining = () => useContext(TrainingContext);
