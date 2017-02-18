class AddForeignKeyForProjectToLoans < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :project_id, :integer, :index => true
    add_foreign_key :loans, :projects
  end
end
