class BarsController < ApplicationController

  def index
    respond_to do |format|
      format.html do 
        @bars=Bar.all
      end
      format.xml { render :xml => @bars }

      if cookies[:lat_lng]==nil
        cookies[:lat_lng]="46.8744076|-96.7879381"
      end

      format.js do
        ne = params[:ne].split(',').collect{|e|e.to_f}  
        sw = params[:sw].split(',').collect{|e|e.to_f}
        @bars = Location.find(:all, :limit => 100, :bounds => [sw, ne])
        render :json => @locations.to_json
      end 
      

      @lat_lng = cookies[:lat_lng].split("|")
      @lat = @lat_lng[0]
      @long = @lat_lng[1]
      @client = GooglePlaces::Client.new(ENV['PLACES_API'])
    end
  end

  def new
  	@bar=Bar.new
    if cookies[:lat_lng]==nil
      cookies[:lat_lng]="46.8744076|-96.7879381"
    end

  end

  def create
  	@bar=Bar.new(params[:bar])
    puts @bar.inspect
  	if @bar.save
  		redirect_to root_url, :notice =>"Bar added!"
  	else
  		render "new"
  	end
  end

end
