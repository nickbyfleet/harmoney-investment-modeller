class AddNameColumnToLoan < ActiveRecord::Migration[5.0]
  def change
    add_column :loans, :name, :string
  end
end
