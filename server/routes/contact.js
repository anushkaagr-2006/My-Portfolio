const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Contact = require('../models/Contact');

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/',
    [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('subject').trim().notEmpty().withMessage('Subject is required'),
        body('message').trim().notEmpty().withMessage('Message is required')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, email, subject, message } = req.body;

            // Save to database
            const contact = new Contact({
                name,
                email,
                subject,
                message
            });

            await contact.save();
            
            // Log the message beautifully
            console.log('\n' + '═'.repeat(50));
            console.log('📬 NEW CONTACT MESSAGE RECEIVED');
            console.log('═'.repeat(50));
            console.log(`📧 From: ${name}`);
            console.log(`📮 Email: ${email}`);
            console.log(`📝 Subject: ${subject}`);
            console.log(`💬 Message:\n   ${message}`);
            console.log(`⏰ Time: ${new Date().toLocaleString()}`);
            console.log('═'.repeat(50) + '\n');

            res.status(200).json({
                success: true,
                message: 'Thank you for your message! I have received it and will get back to you soon.',
                data: {
                    id: contact._id,
                    name: contact.name,
                    email: contact.email,
                    createdAt: contact.createdAt
                }
            });

        } catch (error) {
            console.error('❌ Contact form error:', error);
            res.status(500).json({
                success: false,
                message: 'Failed to send message. Please try again later.'
            });
        }
    }
);

// @route   GET /api/contact
// @desc    Get all contact messages (for you to view)
// @access  Public (should be protected in production)
router.get('/', async (req, res) => {
    try {
        const { status, limit = 50, page = 1 } = req.query;
        
        let query = {};
        if (status) {
            query.status = status;
        }

        const skip = (page - 1) * limit;
        
        const messages = await Contact.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip);

        const total = await Contact.countDocuments(query);
        
        res.json({ 
            success: true,
            count: messages.length,
            total: total,
            page: parseInt(page),
            pages: Math.ceil(total / limit),
            data: messages 
        });
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch messages'
        });
    }
});

// @route   GET /api/contact/stats
// @desc    Get contact message statistics
// @access  Public
router.get('/stats', async (req, res) => {
    try {
        const total = await Contact.countDocuments();
        const unread = await Contact.countDocuments({ status: 'unread' });
        const read = await Contact.countDocuments({ status: 'read' });
        const responded = await Contact.countDocuments({ status: 'responded' });
        
        res.json({
            success: true,
            stats: {
                total,
                unread,
                read,
                responded
            }
        });
    } catch (error) {
        console.error('Error fetching stats:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics'
        });
    }
});

// @route   GET /api/contact/:id
// @desc    Get single contact message
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const message = await Contact.findById(req.params.id);
        if (!message) {
            return res.status(404).json({
                success: false,
                message: 'Message not found'
            });
        }
        res.json({ success: true, data: message });
    } catch (error) {
        console.error('Error fetching message:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch message'
        });
    }
});

// @route   PATCH /api/contact/:id/status
// @desc    Update message status (mark as read/responded)
// @access  Public
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        
        if (!['unread', 'read', 'responded'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status. Must be: unread, read, or responded'
            });
        }
        
        const message = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        
        if (!message) {
            return res.status(404).json({
                success: false,
                message: 'Message not found'
            });
        }
        
        console.log(`✅ Message ${req.params.id} marked as ${status}`);
        
        res.json({
            success: true,
            message: 'Status updated successfully',
            data: message
        });
    } catch (error) {
        console.error('Error updating status:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update status'
        });
    }
});

// @route   DELETE /api/contact/:id
// @desc    Delete contact message
// @access  Public
router.delete('/:id', async (req, res) => {
    try {
        const message = await Contact.findByIdAndDelete(req.params.id);
        if (!message) {
            return res.status(404).json({
                success: false,
                message: 'Message not found'
            });
        }
        
        console.log(`🗑️  Message ${req.params.id} deleted`);
        
        res.json({
            success: true,
            message: 'Message deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete message'
        });
    }
});

module.exports = router;