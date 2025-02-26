import api from  './apiClient'
import { v4 as uuidv4 } from 'uuid';

export const CreateReview = async (review) => {    
    const res = await api.post('/Review/Create', {                       
        Id: uuidv4(),
        UserId:review.UserId,
        CategoryId:review.CategoryId,
        StoreId:review.StoreId,
        Title:review.Title,
        Content:review.Content,
        ThumbNail:review.ThumbNail,
        User: {
            Id: review.UserId,
            AccountPublicKey: review.User.AccountPublicKey,
            AccountPrivateKey: review.User.AccountPrivateKey,            
        }
    })       
    .catch(function(e) {
        console.log(e.response)
    });
    return res;
}




export const GetReviewByStore = async (storeId) => {
    console.log(storeId)
    try {
        const res = await api.get(`/Review/GetReviewByStore/${storeId}`);
        return res;
    } catch (err) {
        throw err;
    }
}

export const GetReviewByUser = async (userId) => {
    try {
        const res = await api.get(`/Review/GetReviewByUser/${userId}`);
        return res;
    } catch(err) {
        throw err;
    }
}