# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Gremlin.create!(name: 'Jerry', species: 'Cat', color: 'Brown', earType: 'Short', tailType: 'Long', eyeColor: 'Blue', satisfaction: 100, hunger: 100)
Gremlin.create!(name: 'Kevin', species: 'Dog', color: 'White', earType: 'Long', tailType: 'Short', eyeColor: 'Brown', satisfaction: 100, hunger: 100)
Gremlin.create!(name: 'Timmy', species: 'Goblin', color: 'Green', earType: 'Pointy', tailType: 'None', eyeColor: 'Black', satisfaction: 100, hunger: 100)