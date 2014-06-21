class UsersController < ApplicationController
  def new
  	@user=User.new
    @lat_lng = cookies[:lat_lng].split("|")
  end

  def create
  	@user=User.new(params[:user])
  	if @user.save
  		redirect_to root_url, :notice =>"Signed up!"
  	else
  		render "new"
  	end
  end
end
