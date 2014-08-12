class VoterReason < ActiveRecord::Base
	belongs_to :vote
	belongs_to :reason
end
