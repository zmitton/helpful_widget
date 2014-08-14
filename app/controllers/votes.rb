get '/articles/:article_id/votes' do
	@article = Article.find(params[:article_id])
	@votes = @article.votes
	@reasons = Reason.all
  erb :votes
end


#create a vote record and input reasons in one ajax call for performance
post '/articles/:article_id/votes' do
	vote = Vote.create(article_id: params[:article_id], helpful: params[:helpful], reason_text: params[:reason_text])
	if params[:reasons_arr]
		params[:reasons_arr].each do |reason_id|
			VoterReason.create(vote_id: vote.id, reason_id: reason_id)
		end
	end
	vote.to_s
end
