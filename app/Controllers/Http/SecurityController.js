'use strict'
const User = use('App/Models/User')
const Hash = use('Hash')

class SecurityController {
    async login ({ auth, request }) {
        const { email, password } = request.all()
        // console.log(password)
        await auth.attempt(email, await Hash.make(password))
    
        return 'Logged in successfully'
    }
    async register({params, request, response}){
		const body = request.post()

		var data = {
			username: body.username,
            email: body.email,
            full_name: body.full_name,
			password: await Hash.make(body.password)
		}

		const taskId = await User.create(data)
		if (taskId) {
			response.json(taskId)
		} else {
			response.json({results: body})
		}

	}
}

module.exports = SecurityController
