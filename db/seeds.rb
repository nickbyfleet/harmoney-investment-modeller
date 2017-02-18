# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

projects = Project.create([
                            {name: 'Test Project'},
                            {name: 'Another Test Project'}
                          ])

Loan.create([
              {amount: 2500, rate: 4.5, project: projects.first},
              {amount: 3000, rate: 6, project: projects.first},
              {amount: 12000, rate: 22.9, project: projects.last}
            ])
