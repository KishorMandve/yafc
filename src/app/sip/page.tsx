import "./page.css";

export default function Sip() {
  return (
    <div>
      <div className="calculate-forms">
        <div className="form-wrapper">
          <div className="input-group">
            <label htmlFor="sip-amount">SIP Amount</label>
            <input id="sip-amount" type="text" placeholder="Enter SIP amount" />
          </div>

          <div className="input-group">
            <label htmlFor="tenure">Tenure</label>
            <input id="tenure" type="number" placeholder="Enter tenure" />
          </div>

          <div className="input-group">
            <label htmlFor="expected-return">Expected Return</label>
            <input
              id="expected-return"
              type="text"
              placeholder="Enter expected return"
            />
          </div>

          <div className="input-group">
            <label htmlFor="expense-ratio">Expense Ratio</label>
            <input
              id="expense-ratio"
              type="text"
              placeholder="Enter expense ratio"
            />
          </div>
        </div>
      </div>
      <div className="calculate-btn">
        <button>Calculate</button>
      </div>
    </div>
  );
}
