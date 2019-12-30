'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
    async lists({request, response}){
		var list = await User.all()
		response.json({results: list})
    }
    async viewById({params, request, response}){
		var user = await User.query().where('id',params.id).first()
		if (user) {
			response.json({results: user})
		} else {
			response.status(404).json({
				status: 'error',
				message: 'user with id '+params.id+' not found!'
			})
		}
    }
    async editById({params, request, response}){
		// console.log(params)
		const body = request.post()
		var user = await User.query().where('id',params.id).first()
		if (user) {
			user.merge({
				username: body.username,
				full_name: body.full_name,
                email: body.email
            })
            if (body.password) {
                user.password = await Hash.make(body.password)
            } else {
                // do nothing *temp
            }
			user.save()
			if (user) {
				response.json({
					status: "Success",
					message: "User with id "+params.id+" updated"
				})
			} else {

			}
		} else {
			response.status(404).json({
				status:"Error",
				message: "User with id "+params.id+" not found!"
			})
		}
	}
}

module.exports = UserController
