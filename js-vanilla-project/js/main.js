import {createHeader} from "./ui/partials/Header.js";
import * as data from "./data/data.js";
import * as feedPage from "./ui/feedPage/FeedList.js";

export const init = () => {
    
    createHeader();
    data.getPosts() 
    .then((posts) => {
        feedPage.createFeedList(posts)
    })   

}