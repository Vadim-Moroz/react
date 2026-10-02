import {useSelector} from "react-redux";
import {store} from "../../slices/store.tsx";

export const useAppSelector= useSelector.withTypes<ReturnType<typeof store.getState>>() // Типізує дані відповідно до типу з store
