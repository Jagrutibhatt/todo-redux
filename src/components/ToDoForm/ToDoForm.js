import "./ToDoForm.css";
import {add} from '../../todoReducer'

function ToDoForm() {
  return (
    <div>
      <form>
        <input type="text" className="form-control" />
        <button type="submit" className="float-end mt-2 btn btn-success">
          add
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
