'use strict'

module.exports = {
	createCourse: (root, { input }) => {
		// proceso de guardar el curso 
    // en base de datos...
		input._id = "pk3"

		return input 
	}
}
