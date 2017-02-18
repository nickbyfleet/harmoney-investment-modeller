class Loan < ApplicationRecord
  belongs_to :project
  validates :name, :amount, :rate, presence: true
  validates :amount, :rate, numericality: { greater_than: 0 }
end
