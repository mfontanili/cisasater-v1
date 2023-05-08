import {useRoute} from "hooks";
import {scuoleLayout} from "./scuole";
import {orgniTecniciLayout} from "./organi_tecnici";

export const useLayout = () => {
    const { name } = useRoute();

    const layout = name === 'scuole' ? scuoleLayout : orgniTecniciLayout;

    return {
        layout,
    };
};