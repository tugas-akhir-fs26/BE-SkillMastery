// @ts-nocheck
const {Course} = require('../models')

module.exports = {
    getCourses : async (req, res) => {
        try {
            const data = await Course.findAll({ limit: 8 });
            
            res.status(200).json({
                ok : true,
                data : data
            })
        } catch(error) {
            console.error(error);
        }
    }
}