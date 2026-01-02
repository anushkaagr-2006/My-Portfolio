require('dotenv').config();

console.log('Testing nodemailer...');
console.log('Node version:', process.version);

try {
    const nodemailer = require('nodemailer');
    console.log('✅ Nodemailer loaded successfully');
    console.log('Nodemailer version:', nodemailer.version);
    
    console.log('\nTesting createTransporter...');
    const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    
    console.log('✅ Transporter created successfully!');
    
    // Verify connection
    transporter.verify(function(error, success) {
        if (error) {
            console.log('❌ Connection error:', error.message);
        } else {
            console.log('✅ Server is ready to send emails!');
            console.log('Email configured for:', process.env.EMAIL_USER);
        }
        process.exit(0);
    });
    
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
    process.exit(1);
}