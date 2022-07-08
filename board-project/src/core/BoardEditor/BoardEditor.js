import http from "../../http-common";

export default class BoardEditRepository {
    constructor(){
    }
    boardEditById = async (id, editData) => {
        console.log(id);
        console.log(editData);
        const res = await http.put(`/tutorials/${id}`, editData);
        console.log(res);
        return res;
    }
}