import http from "../../http-common";

const ListDummy = [
    {
        id : 1,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 2,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 3,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 4,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 5,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 6,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 7,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 8,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 9,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 10,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },
    {
        id : 11,
        title : "Et deserunt officiis.",
        author : "Velva",
        registerDate : "2022-07-08",
        views : 5,
    },    
]


export default class BoardRepository{
    constructor(){

    }
    getBoardList = async () => {
        const res = await http.get("/tutorials");
        const result = {
            status: res.status + "-" + res.statusText,
            headers: res.headers,
            data: res.data,
        };
        return result.data;
    }
}

export const getBoardList = () => {
    return ListDummy;
}

