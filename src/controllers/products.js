import { productList } from "../constants/products.js";

export const getAll = (_, response) => {
    try{
        response.json({
            data: productList,
            message: "Successfuly retrieved Data",
        });
    } catch(error){
        response.status(500);
        response.json({
            message: "Internal Server Error",
        });
    }
};

export const getById = (request, response) => {
    try{
    const { id } = request.params;
    const product = productList[Number(id) - 1]
    if(!product) {
        response.status(404);
        response.json({
            message:"Data not Found",
        });
    }

    response.json({
        data: product,
        message: "Successfully retrieve data",
    });
    }catch(error){
        response.status(500);
        response.json({
            message:"Internal server error!",
        });
    }
};
    
