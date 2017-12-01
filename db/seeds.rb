# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "sanchez", email: 'jon@gmail.com', password: 'codeplatoon')
Concert.create(title: 'Red Hot Chilli Peppers', description: '90s rock', ticket_info: 'free', api_id: 9999, concert_date: DateTime.now)
Concert.create(title: 'monty crew', description: 'more bad 80s bands', ticket_info: 'free', api_id: 9999, concert_date: DateTime.now)
MediaLink.create(concert_id: 1, user_id: 1, media_type: 'video', link:"https://www.youtube.com/embed/4bl_cII6Woc")
MediaLink.create(concert_id: 1, user_id: 1, media_type: 'video', link:'https://www.youtube.com/embed/fuKDBPw8wQA')
MediaLink.create(concert_id: 1, user_id: 1, media_type: 'video', link:'https://www.youtube.com/embed/v2AC41dglnM')