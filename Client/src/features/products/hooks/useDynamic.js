import { useDispatch, useSelector } from "react-redux";
import {
  addValue,
  removeValue,
  initializeValues,
} from "@/features/products/slice/dynamic.slice";

const useDynamic = () => {
  const dispatch = useDispatch();
  const { features, includes, testimonials, faqs } = useSelector(
    (state) => state.dynamic,
  );

  const addListItem = (input, listItem) => {
    dispatch(addValue({ input, listItem }));
  };
  const removeListItem = (id, listItem) => {
    dispatch(removeValue({ id, listItem }));
    console.log(id, listItem);
    
  };
  return {
    features,
    includes,
    testimonials,
    faqs,
    removeListItem,
    addListItem,
    initializeValues,
  };
};

export default useDynamic;
