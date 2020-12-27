'use strict'

const courses = [
	{
		_id: 'pk1',
		title: 'Python basics',
		description: 'Course to learn Python basic',
		topic: 'Python',
		teacherId:'pkt2',
		level: 'Beginner',
	},
	{
		_id: 'pk2',
		title: 'Java basics',
		description: 'JB',
		topic: 'Java',
		teacherId:'pkt1',
		level: 'Advanced',
	},
]

const teachers = [
	{_id: 'pkt1', name: 'Luis Barrera'},
	{_id: 'pkt2', name: 'Vicente Fernandez'},
]


module.exports = {
  courses: () => {
    return courses 
  },
  course: (root, args) => {
    const course = courses.find(c =>c._id === args.id)
    return course
  },
  searchItems: (root, args) => {
    // Normalmente esto se hace con queries a la 
    // base de datos
    const candidatesList = courses.concat(teachers)
    const results = candidatesList.find( c => {
      if(  (c.title === args.keyword)
        || (c.name === args.keyword)){
          return true
        }
    }) 
    return results 
  }
}
