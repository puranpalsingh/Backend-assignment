
const { PreferenceModel } = require("../models/Preference");

exports.savePreferences = async (req,res) => {
    const pref = await PreferenceModel.findOneAndUpdate(
        {user : req.user.id},
        {...req.body, user:req.user.id},
        {upsert:true, new:true}
    );

    res.json(pref);
};

exports.getPreferences = async(req,res) => {
    const pref = await PreferenceModel.findOne({user : req.user.id});
    res.json(pref);
}