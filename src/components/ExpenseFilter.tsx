import categories from "../categories";

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  interface Props {
    onSelectCategory: (category: string) => void;
  }
  return (
    <div className="col-3 mb-3">
      <select
        name=""
        id=""
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>

        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default ExpenseFilter;
