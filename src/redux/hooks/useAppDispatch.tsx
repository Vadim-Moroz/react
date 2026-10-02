import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";
//зробити автозаповнювач для двох хуків
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>() // Типізує dispatch відповідно до dispatch із store