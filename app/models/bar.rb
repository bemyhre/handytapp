class Bar < ActiveRecord::Base
  attr_accessible :address, :city, :state, :coordinates, :grade, :name, :zip
  has_many :beers, through: :barmenus
  geocoded_by :all_addresses
  after_validation :geocode

  def all_addresses
  	"#{address} #{city} #{state} #{zip}"
  end 
end
