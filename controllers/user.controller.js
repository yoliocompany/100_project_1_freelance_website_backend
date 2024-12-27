const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



exports.register = async (req, res)=>{
    
    const { firstname , lastname , email, password } = req.body;

    try {

        const hashedPass = await bcrypt.hash(password, 10);
        const newUser = new User({ firstname, lastname, email, password: hashedPass });
        await newUser.save();
        res.status(201).json({message: 'user created successfully'});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

exports.login = async (req, res)=>{

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if( !user ) return res.status(404).json({ message: 'user not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: 'invalid credentials'});

        const token = jwt.sign({ id: user._id } , '123456789' , { expiresIn: '1h' });

        res.status(200).json({ token });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getUserById = async (req, res)=>{

    const { id } = req.params;
    try {
        
        const user = await User.findById(id , { password: 0 } );
        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.editUser = async (req, res)=>{
    try {

        const { id } = req.params;

        if(req.body.password){
            req.body.password = await bcrypt.hash( req.body.password, 10 );
        }
        await User.findByIdAndUpdate({ _id: id } , req.body);

        res.status(200).json({message: 'user updated'});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}