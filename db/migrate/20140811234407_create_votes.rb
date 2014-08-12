class CreateVotes < ActiveRecord::Migration
  def change
  	 create_table :votes do |t|
      t.integer :article_id
      t.boolean :helpful
 
      t.timestamps
    end
  end
end
