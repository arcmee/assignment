import http from "../../http-common";

export default class BoardCreateRepository {
    constructor() {
    }
    async create( saveData ) {
        const res = await http.post("/tutorials", saveData);
        console.log(res);
        return res;
    }
}