import { MODAL_OPEN, MODAL_CLOSE } from "./modalConstatnts"

export const openModal = (modalType, modalProps) =>{
    console.log("asd");
    return{
        type: MODAL_OPEN,
        payload: {
            modalType,
            modalProps
        }
    }
}

export const closeModal = () =>{
    return {
        type: MODAL_CLOSE
    }
}