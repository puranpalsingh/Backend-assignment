const {userModel} = require('../models/user');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

exports.register = async(req,res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
        error: "Name, email, and password are required",
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);

    try {
        const user = await userModel.create({
            name : name,
            email : email,
            password : hashedPassword
        });
        const token = jwt.sign({
            id : user._id
        },
            process.env.SECRECT,
            { expiresIn: '1h' }
        );
        res.status(201).json({
            message : "user created",
            token : token
        });
    } catch(err) {
        res.status(400).json({
            error : "email already exist"
        });
    }
}

exports.login = async(req,res) => {
    const {email, password} = req.body;
   
    const user = await userModel.findOne({email});
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({
            error : 'Invalid crendentials'
        });
    }
    const token = jwt.sign({
        id : user._id
    },
        process.env.SECRECT,
        { expiresIn: '1h' }
    );

    res.json({token});

}