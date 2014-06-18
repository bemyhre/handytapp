class Beer < ActiveRecord::Base
  attr_accessible :brewery_id, :name, :rating, :style
  has_one :brewery
  has_one :style
  has_many :bars, through: :barmenus
end
