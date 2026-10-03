import {useDispatch} from "react-redux";
import {store} from "../../slices/store.tsx";
// Отримує тип функції dispatch із store та використовує його для створення типізованого хука useAppDispatch
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>()

