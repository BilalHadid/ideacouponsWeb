import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import { useField } from "react-final-form";
import { useInput } from "react-admin";
const SexInput = (props) => {
  const {
    input,
    meta: { touched, error },
  } = useInput(props);

  return (
    // <Select
    //     label="Sex"
    //     {...input}
    // >
    //     <MenuItem value="M">Male</MenuItem>
    //     <MenuItem value="F">Female</MenuItem>
    // </Select>
    <FormControl>
      <InputLabel shrink htmlFor="select-multiple-native">
        Native
      </InputLabel>
      <Select multiple native {...input}>
        {input.map((store) => (
          <option value={store}>{store}</option>
        ))}
      </Select>
    </FormControl>
  );
};
export default SexInput;
