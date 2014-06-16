class CreateBar_Menus <ActiveRecord::Migration
	def change
		create_table :bar_menus do |t|
			t.belongs_to :beer
			t.belongs_to :bar
		end
end