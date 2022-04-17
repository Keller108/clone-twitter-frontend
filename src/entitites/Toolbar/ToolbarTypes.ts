interface IToolbarOption {
    name: string;
}

export class ToolbarOption {
    name: string;
    icon: string;

    constructor({ name }: IToolbarOption) {
        this.name = name;
        this.icon = name;
    }
}