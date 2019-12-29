'use strict'

class TaskController {
    async lists({request, response}){
		var list = await Task.all()
		response.json({results: list})
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
	async post({params, request, response}){
		const body = request.post()

		var data = {
			due_date: body.due_date,
			title: body.title,
			description: body.description
		}

		const taskId = await Task.create(body)
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
		console.log(body)
		var task = await Task.query().where('id',params.id).first()
		response.json({results: task})
	}


	updateUser(id, data){
		//update json array text on table * push to array *
		console.log("update user")
		return ""
	}
}

module.exports = TaskController
