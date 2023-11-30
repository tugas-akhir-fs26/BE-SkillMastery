// @ts-nocheck
const {Enrollments} = require('../models')

module.exports = {
    checkout : async(req,res) => {
        try{
            const {
                userID,
                courseID,
                enrollment_date
            } = req.body

            const data = await Enrollments.create({
                userID : userID,
                courseID : courseID,
                enrollment_date : enrollment_date
            })

            res.status(200).json({
                ok : true,
                message : "berhasil membeli course!"
            })
        }catch(error){
            res.status(400).json({
                ok : false,
                error : error
            })
        }
    }
}
