class Brewery < ActiveRecord::Base
  attr_accessible :address, :city, :coordinates, :name, :rating, :zip
  has_many :beers
end