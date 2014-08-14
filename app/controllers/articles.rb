
#show article (only one sample article)
get '/articles/:article_id' do
	@reasons = Reason.all
	@article = Article.find(params[:article_id])
	puts "################################################"
	erb :article
end
