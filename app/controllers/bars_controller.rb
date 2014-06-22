class BarsController < ApplicationController

  def index
  	@bars=Bar.all
    if cookies[:lat_lng]==nil
      cookies[:lat_lng]="46.8744076|-96.7879381"
    end
    @lat_lng = cookies[:lat_lng].split("|")
    @lat = @lat_lng[0]
    @long = @lat_lng[1]
    @client = GooglePlaces::Client.new(ENV['PLACES_API'])
    puts @client.spots(@lat,@long, :types => 'bar').inspect
  end

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
