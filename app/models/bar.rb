class Bar < ActiveRecord::Base
  attr_accessible :address, :city, :coordinates, :grade, :name, :zip
  has_many :beers, through: :beer_menu
end
