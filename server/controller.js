function getInventory(req, res) {
    const db = req.app.get('db')

    db.get_inventory()
    .then(response => {
        res.status(200).json(response)
    })
}

function createProduct(req,res) {
    const db = req.app.get('db')
    const {name, price, imgUrl} = req.body;

    db.create_product(name, price, imgUrl)
    .then(response => {
        res.status(200).json(response)
    })
}

function deleteProduct(){
    const db = req.app.get('db')
    const id = +req.params.id
    
    db.deleteProduct(id).then(() => {
        res.sendStatus(200)
    })
}

module.exports = {
    getInventory,
    createProduct,
    deleteProduct
}