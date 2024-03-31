import categories from "../categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z.number().min(0.01).max(100_000),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      className="col-6 mb-4"
    >
      <div className="mb-3">
        <label htmlFor="name" className="">
          Description
        </label>
        <input
          {...register("description")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="text"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="">
          Select Category
        </label>
        <select
          {...register("category")}
          name="category"
          id="category"
          className="form-select"
        >
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default Form;
