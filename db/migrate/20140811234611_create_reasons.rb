class CreateReasons < ActiveRecord::Migration
  def change
 	create_table :reasons do |t|
      t.text :description
 
      t.timestamps
    end  	
  end
end
