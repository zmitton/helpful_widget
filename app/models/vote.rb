class Vote < ActiveRecord::Base
	has_many :voter_reasons
	has_many :reasons, through: :voter_reasons, source: :reason
	belongs_to :article
end
