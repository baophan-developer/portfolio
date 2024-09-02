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
    PROGRAMMING_LANGUAGE = "programming language",
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
    nameProject: string;
    teamSize: number;
    /**rangeTiem: [start time, end time] */
    rangeTime: [string, string];
    technicalUsed: string[];
    description: string;
    tasks: string[];
}
export type ListExperience = Array<Experience>;

export type Education = {
    nameSchool: string;
    major: string;
    rangeTime: [string, string];
};

export type ListEducation = Array<Education>;
