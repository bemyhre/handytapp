class Beer < ActiveRecord::Base
  attr_accessible :brewery, :name, :rating, :style
  has_one :brewery
  has_many :bars, through: :beer_menu
end
