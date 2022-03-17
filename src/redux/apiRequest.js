import { updateDishes } from "./reducer";

/* export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/dishes");
      if (!response.ok) {
        throw new Error("Could not reach data");
      }
      const data = await response.json();
      return data;
    }; 
    try {
      const cartData = await fetchData();
      dispatch(updateDishes(cartData));
    } catch (error) {

    }
  };
}; */

/* const dispatch = useDispatch();
fetch("http://localhost:3001/dishes")
  .then((data) => data.json())
  .then((jsonData) => {
    return jsonData
  });
  useEffect(()=>{
    dispatch(updateDishes(jsonData));
  }) */
