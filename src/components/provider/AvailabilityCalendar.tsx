import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface AvailabilityCalendarProps {
  availability: { [day: number]: "available" | "booked" | "blocked" };
}

const DAYS_OF_WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const AvailabilityCalendar = ({ availability }: AvailabilityCalendarProps) => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = new Date(year, month).toLocaleString("pt-BR", { month: "long" });

  const prev = () => {
    if (month === 0) { setMonth(11); setYear(year - 1); }
    else setMonth(month - 1);
  };
  const next = () => {
    if (month === 11) { setMonth(0); setYear(year + 1); }
    else setMonth(month + 1);
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const colorFor = (day: number) => {
    const status = availability[day];
    if (status === "booked") return "bg-primary/20 text-primary font-semibold";
    if (status === "blocked") return "bg-muted text-muted-foreground line-through";
    return "bg-success/15 text-success font-medium";
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-5">Disponibilidade</h2>
      <div className="bg-card rounded-2xl shadow-card p-6">
        <div className="flex items-center justify-between mb-4">
          <button onClick={prev} className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <span className="font-display font-semibold text-foreground capitalize">{monthName} {year}</span>
          <button onClick={next} className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors">
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-1">
          {DAYS_OF_WEEK.map((d) => (
            <div key={d} className="text-center text-xs text-muted-foreground py-1">{d}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((day, i) => (
            <div key={i} className="aspect-square flex items-center justify-center">
              {day && (
                <span className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm ${colorFor(day)}`}>
                  {day}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-success/15" /> Disponível</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary/20" /> Reservado</span>
          <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-muted" /> Bloqueado</span>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;
