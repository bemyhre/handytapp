class CreateBarMenus < ActiveRecord::Migration
	def change
		create_table :barmenus do |t|
			t.belongs_to :beer
			t.belongs_to :bar
		end
	end
end