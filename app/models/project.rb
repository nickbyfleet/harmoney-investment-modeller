class Project < ApplicationRecord
  has_many :loans, :dependent => :delete_all
  validates :name, presence: true
end
