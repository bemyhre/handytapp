class BarsController < ApplicationController
  def new
  	@bar=Bar.new
  end

  def create
  	@bar=Bar.new(params[:bar])
  	if @bar.save
  		redirect_to root_url, :notice =>"Bar added!"
  	else
  		render "new"
  	end
  end
end
