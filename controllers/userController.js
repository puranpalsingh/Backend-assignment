const { userModel } = require("../models/user")

exports.getProfile = async(req,res) => {
    const user = await userModel.findById(req.user.id).select('-password');
    res.json(user);
};

exports.updateProfile = async(req, res) => {
    const updated = await userModel.findByIdAndUpdate(req.user.id, req.body, {new:true}).select('-password');

    res.json(updated);
};

exports.getDashboardSummary = (req, res) => {
    res.json({
        team : 2,
        projects : 3,
        notification : 5
    });
};