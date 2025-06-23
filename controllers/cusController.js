const CusModel = require('../models/cusModel')

exports.addCus = async (req, res) => {
    try {
        const { cus_name, cus_tel, cus_planet } = req.body
        if (!cus_name || !cus_tel || !cus_planet ) {
            return res.status(400).json({ message: 'Please provide all required fields [cus_name, cus_tel, cus_planet]' })
        }
        const newCus = new CusModel({ cus_name, cus_tel, cus_planet })
        await newCus.save()
        res.status(201).json({ message: 'Cus added successfully', customer: newCus })
    } catch (error) {
        console.error('Error adding customer:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.getAllCus = async (req, res) => {
    try {
        const cuss = await CusModel.find()
        res.status(200).json(customers)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
exports.getCusById = async (req, res) => {
    try {
        const { id } = req.params
        const cusss = await CusModel.findById(id)
        res.status(200).json(customers)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.updateCusById = async (req, res) => {
    try {
        const { id } = req.params
        const { cus_name, cus_tel, cus_planet } = req.body

        if (!cus_name || !cus_tel || !cus_planet) {
            return res.status(400).json({ message: 'Please provide all required fields [cus_name, cus_tel, cus_planet]' })
        }

        const customers = await CusModel.findByIdAndUpdate(id, { cus_name, cus_tel, cus_planet }, { new: true })
        res.status(200).json({ message: 'Cus updated successfully', customer: customers })
    } catch (error) {
        console.error('Error fetching customers:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

exports.deleteCusById = async (req, res) => {
    try {
        const { id } = req.params
        const cuss = await CusModel.findByIdAndDelete(id)
        res.status(200).json({ message: 'cuss delete successfully' })
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
