import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
//
import { cartActions } from "../store/cart/cart.slice";
import { mainActions } from '../store/main/main.slice';

const AllActions = {
    ...cartActions,
    ...mainActions,
}


const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(AllActions, dispatch)
}

export default useActions