export class Ticket {
    constructor(
        public id: string,
        public numero: number,
        public title: string,
        public status: string,
        public priority: string,
        public image: string,
        public user: string,
        public assignedUser: string,
        public date: string,
        public description: string,
        public changes: Array<string>
    ) {}
}
