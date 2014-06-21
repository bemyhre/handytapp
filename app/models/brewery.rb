class Brewery < ActiveRecord::Base
  attr_accessible :address, :city, :coordinates, :name, :rating, :zip, :state
  has_many :beers
  geocoded_by :all_addresses
  after_validation :geocode, :if => :all_addresses_changed?

  def all_addresses
  	"#{address} #{city} #{state} #{zip}"
  end 
end
