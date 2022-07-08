import http from "../../http-common";

export default class BoardCreateRepository {
    constructor() {
    }
    async create( saveData ) {
        const res = await http.post("/tutorials", saveData);
        return res;
    }
}