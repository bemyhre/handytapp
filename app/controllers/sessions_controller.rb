class SessionsController < ApplicationController
  def new
  end

  def create
  	user = User.authenticate(params[:email], params[:password])
  	if user
  		session[:id] = user.id
  		redirect_to root_url#, :notice => "Logged in!"
  	else
  		flash.now.alert = "Invalid credentials"
  		render "new"
  	end
  end

  def destroy
  	session[:id] = nil
    cookies.delete(:lat_lng)
  	redirect_to root_url#, :notice => "Logged out!"
  end
end

