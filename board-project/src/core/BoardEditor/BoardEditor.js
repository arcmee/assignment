import http from "../../http-common";

export default class BoardEditRepository {
    constructor(){
    }
    boardEditById = async (id, editData) => {
        const res = await http.put(`/tutorials/${id}`, editData);
        return res;
    }
}