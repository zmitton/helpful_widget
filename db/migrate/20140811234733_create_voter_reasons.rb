class CreateVoterReasons < ActiveRecord::Migration
  def change
	create_table :voter_reasons do |t|
      t.integer :vote_id
      t.integer :reason_id
 
      t.timestamps
    end  	
  end
end
