const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot be more than 100 characters']
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    excerpt: {
        type: String,
        required: [true, 'Excerpt is required'],
        maxlength: [200, 'Excerpt cannot be more than 200 characters']
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    author: {
        type: String,
        default: 'Your Name'
    },
    category: {
        type: String,
        required: true,
        enum: ['Web Development', 'Mobile Development', 'DevOps', 'AI/ML', 'Tutorial', 'Career', 'Other']
    },
    tags: [{
        type: String,
        trim: true
    }],
    image: {
        type: String,
        default: '/images/blog-default.jpg'
    },
    published: {
        type: Boolean,
        default: true
    },
    views: {
        type: Number,
        default: 0
    },
    readTime: {
        type: Number,
        default: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

blogSchema.pre('save', function(next) {
    if (this.isModified('title')) {
        this.slug = this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
    this.updatedAt = Date.now();
    next();
});

blogSchema.pre('save', function(next) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
    next();
});

blogSchema.index({ slug: 1 });
blogSchema.index({ category: 1 });
blogSchema.index({ published: 1, createdAt: -1 });

module.exports = mongoose.model('Blog', blogSchema);