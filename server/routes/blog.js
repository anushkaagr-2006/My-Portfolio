const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Blog = require('../models/Blog');

router.get('/', async (req, res) => {
    try {
        const { category, tag, limit = 10, page = 1 } = req.query;
        
        let query = { published: true };
        
        if (category) {
            query.category = category;
        }
        
        if (tag) {
            query.tags = tag;
        }

        const skip = (page - 1) * limit;
        
        const posts = await Blog.find(query)
            .sort({ createdAt: -1 })
            .limit(parseInt(limit))
            .skip(skip);

        const total = await Blog.countDocuments(query);

        res.json({
            success: true,
            data: posts,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch blog posts'
        });
    }
});

router.get('/:slug', async (req, res) => {
    try {
        const post = await Blog.findOne({ slug: req.params.slug, published: true });
        
        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Blog post not found'
            });
        }

        post.views += 1;
        await post.save();

        res.json({ success: true, data: post });
    } catch (error) {
        console.error('Error fetching blog post:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch blog post'
        });
    }
});

router.post('/',
    [
        body('title').trim().notEmpty().withMessage('Title is required'),
        body('excerpt').trim().notEmpty().withMessage('Excerpt is required'),
        body('content').trim().notEmpty().withMessage('Content is required'),
        body('category').notEmpty().withMessage('Category is required')
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const blog = new Blog(req.body);
            await blog.save();

            res.status(201).json({
                success: true,
                message: 'Blog post created successfully',
                data: blog
            });
        } catch (error) {
            console.error('Error creating blog post:', error);
            
            if (error.code === 11000) {
                return res.status(400).json({
                    success: false,
                    message: 'A post with this title already exists'
                });
            }

            res.status(500).json({
                success: false,
                message: 'Failed to create blog post'
            });
        }
    }
);

router.put('/:id', async (req, res) => {
    try {
        const post = await Blog.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Blog post not found'
            });
        }

        res.json({
            success: true,
            message: 'Blog post updated successfully',
            data: post
        });
    } catch (error) {
        console.error('Error updating blog post:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update blog post'
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const post = await Blog.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Blog post not found'
            });
        }

        res.json({
            success: true,
            message: 'Blog post deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting blog post:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete blog post'
        });
    }
});

router.get('/categories/list', async (req, res) => {
    try {
        const categories = await Blog.aggregate([
            { $match: { published: true } },
            { $group: { _id: '$category', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        res.json({ success: true, data: categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch categories'
        });
    }
});

module.exports = router;