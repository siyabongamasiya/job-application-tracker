import InputField from "./InputField";

interface DateFilterProps {
  currentDate: string;
  onDateChange(newValue: string): void;
}

const DateFilter = ({ currentDate, onDateChange }: DateFilterProps) => {
  return (
    <div className="floating-input-datefilter">
      <input
        type="date"
        value={currentDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onDateChange(e.target.value)
        }
        placeholder="yyyy/mm/dd"
      />
    </div>
  );
};

export default DateFilter;
