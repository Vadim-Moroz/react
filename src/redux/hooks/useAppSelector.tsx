import {useSelector} from "react-redux";
import {store} from "../../slices/store.tsx";
// Отримує тип стану, який повертає store.getState(), та передає його useSelector для створення типізованого хука useAppSelector
export const useAppSelector= useSelector.withTypes<ReturnType<typeof store.getState>>()
