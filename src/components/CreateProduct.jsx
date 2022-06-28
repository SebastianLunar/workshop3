import {
  ButtonCreate,
  CreateDiv,
  CreateInputs,
  FileDiv,
  InputCreate,
  SelectCreate,
  TextareaCreate,
} from "../styles/CreateProductStyles";
import camera from "../assets/images/camera1.svg";
import { useForm } from "../hooks/useForm";
import { fileUpload } from "../helpers/fileUpload";
import { productAddAsync } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import { NavBars } from "./NavBars";

export const CreateProduct = () => {
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    location: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(productAddAsync(formValues));
    reset();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((res) => {
        formValues.image = res;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <CreateDiv>
        <h2>Create an advertisement</h2>
        <form onSubmit={handleSubmit}>
          <FileDiv>
            <img src={camera} />
            <label htmlFor="img">+ Add photo</label>
            <input
              type="file"
              name="image"
              id="img"
              onChange={handleFileChange}
            />
          </FileDiv>
          <CreateInputs>
            <InputCreate
              type="text"
              placeholder="Name*"
              name="title"
              onChange={handleInputChange}
              value={formValues.title}
            />
            <SelectCreate
              name="category"
              onChange={handleInputChange}
              value={formValues.category}
            >
              <option value="Category">Category*</option>
              <option value="tv">TV</option>
              <option value="phone">Phone</option>
              <option value="laptop">Notebook</option>
              <option value="shirt">T-shirt</option>
            </SelectCreate>
            <InputCreate
              type="number"
              placeholder="Price*"
              name="price"
              onChange={handleInputChange}
              value={formValues.price}
            />
            <InputCreate
              type="text"
              placeholder="Country*"
              name="location"
              onChange={handleInputChange}
              value={formValues.location}
            />
            <InputCreate
              type="text"
              placeholder="City*"
              name="city"
              onChange={handleInputChange}
              value={formValues.city}
            />
            <TextareaCreate
              placeholder="Description"
              name="description"
              onChange={handleInputChange}
              value={formValues.description}
            />
            <ButtonCreate type="submit" onClick={handleSubmit}>
              Save
            </ButtonCreate>
          </CreateInputs>
        </form>
      </CreateDiv>
      <NavBars active={"active"} />
    </>
  );
};
