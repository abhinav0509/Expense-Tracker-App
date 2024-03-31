const Form = () => {
  return (
    <form action="" className="col-6 mb-4">
      <div className="mb-3">
        <label htmlFor="name" className="">
          Description
        </label>
        <input id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="">
          Amount
        </label>
        <input id="amount" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="">
          Select Category
        </label>
        <select name="category" id="category" className="form-select">
          <option value="">Utilities</option>
        </select>
      </div>
      <button className="btn btn-primary">Add Expense</button>
    </form>
  );
};

export default Form;
