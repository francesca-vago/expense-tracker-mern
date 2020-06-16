const express = require('express');
const router = express.Router();

const Transaction = require('../models/Transaction');

// const {
//     getTransactions,
//     addTransaction,
//     deleteTransaction
// } = require('../controllers/transaction-controller');

router
.route('/')

// @route   GET /api/v1/transactions
// @desc    Get all transactions
// @access  Public
.get(async (req, res) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: (await transactions).length,
            data: transactions
        })
        
    } catch (error) {

        return res.status(500).json({
            success: false,
            error: error
        })
        
    }
})

// @route   POST /api/v1/transactions
// @desc    Add transaction
// @access  Public
.post(async (req, res) => {
    try {
        const newTransaction = new Transaction({
            text: req.body.text,
            amount: req.body.amount
        })
    
        await newTransaction.save().then(data => res.json(data))
        
    } catch (error) {

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }

})

router
.route('/:id')

// @route   DELETE /api/v1/transactions/:id
// @desc    Delete transaction
// @access  Public
.delete(async (req, res) => {
    try {
        await Transaction
        .findById(req.params.id)
        .then(item => {
            item
            .remove()
            .then(() => res.json({success: true}))
        })

    } catch (error) {

        return res.status(404).json({
            success: false
        })
    }
})

module.exports = router;