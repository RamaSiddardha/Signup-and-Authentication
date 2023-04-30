import classes from "./AuthForm.module.css";
const SecurityQuestions = (props) => {
  return (
    <div className={classes.control}>
      <label htmlFor="securityQuestions">security Question</label>
      <select id="securityQuestions" style={{ width: "100%",height : "2rem" }}>
        <option value="">Choose a question...</option>
        <option value="What is the name of a college you applied to but didn't attend?">
          What is the name of a college you applied to but didn't attend?
        </option>
        <option value="What was the name of the first school you remember attending?">
          What was the name of the first school you remember attending?
        </option>
        <option value="Where was the destination of your most memorable school field trip?">
          Where was the destination of your most memorable school field trip?
        </option>
        <option value="What was your math's teacher's surname in your 8th year of school?">
          What was your math's teacher's surname in your 8th year of school?
        </option>
        <option value="What was the name of your first stuffed toy?">
          What was the name of your first stuffed toy?
        </option>
        <option value="What was your driving instructor's first name?">
          What was your driving instructor's first name?
        </option>
        <option value="Other">Other</option>
      </select>
      <div className={classes.control} >
          <input type="text" id="answer" placeholder="Your Answer" style={{marginTop : '0.5rem'}} required  />
        </div>
    </div>
  );
};

export default SecurityQuestions
