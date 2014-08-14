class Vote < ActiveRecord::Base
	has_many :voter_reasons
	has_many :reasons, through: :voter_reasons, source: :reason
	belongs_to :article

	def to_s
		output =  "helpful: #{helpful}\n"
		output << "reason_text: #{reason_text}\n" if reason_text != ""
		output << "reasons:\n" if reasons.length > 0
		reasons.each{ |reason| output << "    #{reason.description}\n" }
		return output
	end
end
