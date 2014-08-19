get '/articles/:article_id/votes/new' do
  erb :_vote2, :layout => false 
end



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
	# response['Access-Control-Allow-Origin'] = 'http://localhost:9393'
	headers( "Access-Control-Allow-Origin" => "*" )
	vote.to_s
end


#tempetmeptmeptmeptmep
get '/articles/:article_id/votes/temp' do
	@reasons = Reason.all
  erb :_vote3, :layout => false 
end

get '/test' do
	erb :test, :layout => false 
end



# <html> 
#   <head> 
#     <script src="jquery.js"></script> 
#     <script> 
#     $(function(){
#       $("#includedContent").load("b.html"); 
#     });
#     </script> 
#   </head> 

#   <body> 
#      <div id="includedContent"></div>
#   </body> 
# </html>