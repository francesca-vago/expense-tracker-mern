const Transaction = require('../models/Transaction');

// @route GET /api/v1/transactions
// @desc Get all transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = Transaction.find();

        return res.status(200).json({
            success: true,
            count: (await transactions).length,
            data: transactions
        })
        
    } catch (error) {

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
        
    }
}

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = (req, res, next) => {
    res.send('POST Transaction');
}

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE Transaction');
}