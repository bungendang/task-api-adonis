'use strict'
const Task = use('App/Models/Task')
const User = use('App/Models/User')

class TaskController {
    async lists({request, response}){
		var list = await Task.all()
		response.json({results: list})
    }
    async viewById({params, request, response}){
		var task = await Task.query().where('id',params.id).first()
		if (task) {
			response.json({results: task})
		} else {
			response.status(404).json({
				status: 'error',
				message: 'task with id '+params.id+' not found!'
			})
		}
	}
	async editById({params, request, response}){
		// console.log(params)
		const body = request.post()
		var task = await Task.query().where('id',params.id).first()
		if (task) {
			task.merge({
				title: body.title,
				description: body.description,
				done: body.done
			})
			task.save()
			if (task) {
				response.json({
					status: "Success",
					message: "Task with id "+params.id+" updated"
				})
			} else {

			}
		} else {
			response.status(404).json({
				status:"Error",
				message: "Task with id "+params.id+" not found!"
			})
		}
	}
	
	async post({params, request, response}){
		const body = request.post()

		var data = {
			due_date: body.due_date,
			title: body.title,
			description: body.description
		}

		const taskId = await Task.create(data)
		if (taskId) {
			response.json(taskId)
		} else {
			response.json({results: body})
		}

	}
	async deleteById({params, request, response}){
		var task = await Task.query().where('id',params.id).delete()
		if (task) {
			response.json({
				status: 'success',
				message: 'task with id '+params.id+' deleted'
			})
		} else {
			response.status(404).json({
				status: 'error',
				message: 'task with id '+params.id+' not found!'
			})
		}
	}
	async assignToUserId({params, request, response}){
        const body = request.post()
        console.log(body)
        var task = await Task.query().where('id',params.id).first()

        if (task) {
            var newUser = await this.updateUser(body.user_id, task.user)
            task.user = JSON.stringify(newUser)
            task.save()
            response.json({results: newUser})            
        } else {
            response.status(404).json({status: "error", message: "task with id "+params.id+" not found"})
        }
	}


	async updateUser(id, data){
        //update json array text on table * push to array *
        var userAssign = []
        var user = await User.find(id)
        if (user) {
            if (data && data.length > 0) {
                userAssign = JSON.parse(data)
            }
            // masih belum filter if user assign / unassign
            userAssign.push({
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                username: user.username
            })
        } else {
            // kasih data semula karena user not found
            userAssign = JSON.parse(data)
        }
		return userAssign
	}
}

module.exports = TaskController
