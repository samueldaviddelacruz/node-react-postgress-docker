
class ProductsRepo {

    async save(description,price){
        throw Error("Must implemented on derived class")
    }
    async delete(id){
        throw Error("Must implemented on derived class")
    }

    async list(){
        throw Error("Must implemented on derived class")
    }
    async getById(id){
        throw Error("Must implemented on derived class")
    }
}

module.exports = {ProductsRepo}

