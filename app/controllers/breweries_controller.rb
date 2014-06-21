class BreweriesController < ApplicationController
  def new
  	@brewery=Brewery.new
  end
  
  def create
  	@brewery=Brewery.new(params[:brewery])
  	if @brewery.save
  		redirect_to root_url, :notice =>"Brewery added!"
  	else
  		render "new"
  	end
  end
end
