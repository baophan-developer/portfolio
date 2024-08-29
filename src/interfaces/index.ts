/**
Example:
    const tech: Technical = {
        typeTech: "FE",
        nameTech: ["React", "Typescript", "Javascript"],
    };
*/
export enum TYPE_TECH {
    FRONT_END = "front-end",
    BECK_END = "back-end",
    TOOL = "tool",
    DATABASE = "database",
    FRONT_END_RELATED = "front-end related",
}

export interface Technical {
    typeTech: `${TYPE_TECH}`;
    nameTech: string[];
}

export interface Information {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumber: string;
    currentLevel: string;
}

export interface Social {
    linkIn: string;
    gitHub: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    twitter?: string;
    telegram?: string;
}

export interface LiveProject {
    nameProject: string;
    linkPreview: string;
    description: string;
}
export type ListLiveProject = Array<LiveProject>;

export interface Experience {
    nameCompany: string;
    teamSize: number;
    technicalUsed: string[];
    tasks: string[];
}
export type ListExperience = Array<Experience>;
