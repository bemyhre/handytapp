class Beer < ActiveRecord::Base
  attr_accessible :brewery, :name, :rating, :style
end
