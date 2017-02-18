class CreateLoans < ActiveRecord::Migration[5.0]
  def change
    create_table :loans do |t|
      t.decimal :amount
      t.decimal :rate

      t.timestamps
    end
  end
end
