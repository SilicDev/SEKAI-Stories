import { Dispatch, SetStateAction } from "react";
import * as PIXI from "pixi.js";
import IModel from "./IModel";
import IBackground from "./IBackground";
import IText from "./IText";
import ISceneSetting from "./ISceneSetting";
export default interface ISceneContextType {
    openedSidebar: string;
    setOpenedSidebar: Dispatch<SetStateAction<string>>;
    app: PIXI.Application | undefined;
    setApp: Dispatch<SetStateAction<PIXI.Application | undefined>>;
    models: Record<string, IModel> | undefined;
    setModels: Dispatch<SetStateAction<Record<string, IModel> | undefined>>;
    layers: number;
    setLayers: Dispatch<SetStateAction<number>>;
    nextLayer: number;
    setNextLayer: Dispatch<SetStateAction<number>>;
    modelContainer: PIXI.Container | undefined;
    setModelContainer: Dispatch<SetStateAction<PIXI.Container | undefined>>;
    background: IBackground | undefined;
    setBackground: Dispatch<SetStateAction<IBackground | undefined>>;
    text: IText | undefined;
    setText: Dispatch<SetStateAction<IText | undefined>>;
    sceneSetting: ISceneSetting | undefined;
    setSceneSetting: Dispatch<SetStateAction<ISceneSetting | undefined>>;
    reset: number;
    setReset: Dispatch<SetStateAction<number>>;
    hide: boolean;
    setHide: Dispatch<SetStateAction<boolean>>;
    hideAnnouncements: boolean;
    setHideAnnouncements: Dispatch<SetStateAction<boolean>>;
    startingMessage: string;

    setStartingMessage: Dispatch<SetStateAction<string>>;
}
