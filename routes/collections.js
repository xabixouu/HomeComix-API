const database = require('../database.js');

const collections = {

	getAll(request, response) {
		const db = database.get();

		try {
			db.collection('collections').find({}).toArray((err, docs) => {
				if (err) {
					database.close();
					throw (err);
				}

				return response.status(200).json({
					status: 200,
					success: true,
					message: 'GET all collections',
					books: docs
				});
			});
		} catch (err) {
			return response.status(500).json({
				status: 500,
				success: false,
				message: 'Internal server error'
			});
		}
	},

	getOne(request, response) {
		return response.status(200).json({
			status: 200,
			message: `GET one collection with id: ${request.params.id}`
		});
	},

	create(request, response) {
		return response.status(201).json({
			status: 201,
			success: true,
			message: 'CREATE collection',
			body: request.body
		});
	},

	update(request, response) {
		return response.status(200).json({
			status: 200,
			success: true,
			message: `UPDATE collection with id: ${request.params.id}`,
			body: request.body
		});
	},

	delete(request, response) {
		return response.status(200).json({
			status: 200,
			success: true,
			message: `DELETE collection with id: ${request.params.id}`
		});
	}
};

module.exports = collections;
