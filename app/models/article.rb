class Article < ActiveRecord::Base
	has_many :votes
	has_many :reasons, through: :votes, source: :reasons
end
