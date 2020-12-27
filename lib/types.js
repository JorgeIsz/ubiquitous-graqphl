'use strict'

const teachers = [
	{_id: 'pkt1', name: 'Luis Barrera'},
	{_id: 'pkt2', name: 'Vicente Fernandez'},
]

module.exports = {
	Course: {
		teacher: (course) => {
			// Esta consulta se haria desde la
			// base de datos normalmente
			let teacher = teachers.find(t => {
				return t._id === course.teacherId
			}) 
			return teacher 
		}
	},
  Person: {
    __resolveType: (person, context, info) => {
      // Aqui se hace la validacion de tipo
      return 'Teacher'
    }
  },
  Search: {
    __resolveType: (item, context, info) => {
      if(item.topic){
        return 'Course'
      }
      return 'Teacher'
    }
  }
}
