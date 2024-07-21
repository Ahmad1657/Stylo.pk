const Product = require("../models/product.model")

exports.store = async (req, res) => {
    try {
        console.log(req.body)
        const product = await Product.create(req.body)
        res.json({ status: 200, message: "Product created successfully", product })
    }
    catch (err) {
        console.log(err);
    }
}

exports.index = async (req, res) => {
    try {
        const { category } = req.query;
        const query = {};
        if (category) {
            query.category = category;
        }
        console.log(req.body)
        const product = await Product.find(query)
        res.json({ status: 200, message: "Product fetched successfully", product })
    }
    catch (err) {
        console.log(err);
    }
}

exports.get = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ _id: id })
        if (!product) {
            return res.json({ status: 404, success: false, message: `Couldn't find product` })
        }
        res.json({ status: 200, message: "Product fetched successfully", product })
    }
    catch (err) {
        console.log(err);
    }
}

exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndDelete({ _id: id })
        if (!product) {
            return res.json({ status: 404, success: false, message: `Couldn't find product` })
        }
        res.json({ status: 200, message: "Product Deleted successfully", product })
    }
    catch (err) {
        console.log(err);
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true })
        if (!product) {
            return res.json({ status: 404, success: false, message: `Couldn't find product` })
        }
        res.json({ status: 200, message: "Product updated successfully", product })
    }
    catch (err) {
        console.log(err);
    }
}