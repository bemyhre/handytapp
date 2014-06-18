class Style < ActiveRecord::Base
  attr_accessible :style_name
  has_many :beers
end
