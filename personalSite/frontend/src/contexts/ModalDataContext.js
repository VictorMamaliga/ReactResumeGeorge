import { createContext } from "react";
import { createType, deleteType, editType, viewType, visibilityType } from "../helpers";

export const ModalDataContext = createContext(null);
export const ModalDataDispatchContext = createContext(null);

export function modalDataReducer(project, action) {
    switch (action.type) {
        case viewType: {
            return { requestType: action.type, data: action.data }
        }
        case createType: {
            return { requestType: action.type, data: action.data };
        }
        case editType: {
            return { requestType: action.type, data: action.data };
        }
        case visibilityType: {
            return { requestType: action.type, data: action.data }
        }
        case deleteType: {
            return { requestType: action.type, id: action.id };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}