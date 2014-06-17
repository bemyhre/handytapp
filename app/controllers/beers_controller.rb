class BeersController < ApplicationController
  def new
  	@beer=Beer.new
  	@breweries = Brewery.all
  end

  def create
  	@beer=Beer.new(params[:beer])
  	if @beer.save
  		redirect_to root_url, :notice =>"Beer added!"
  	else
  		render "new"
  	end
  end

end
