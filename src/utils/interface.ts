export interface ProjectDataObjectInterface {
    [key: string]: ProjectDataInterface;
}

export interface ProjectDataInterface {
    img: string;
    tech: ProjectTech[];
    links: {
        key: string;
        type: ProjectLinkTypes;
        url: string;
    }[];
    moreImg: string[];
}