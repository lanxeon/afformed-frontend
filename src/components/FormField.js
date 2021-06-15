import classes from "./FormField.module.css";

const FormField = ({ data, changeHandler, name, label, type }) => {
  return (
    <div className={classes.FormField}>
      <label className={classes.label} htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        onChange={(e) => changeHandler(e.target.value)}
        value={data}
        type={type}
      />
    </div>
  );
};

export default FormField;
