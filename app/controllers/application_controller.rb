class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  after_action :store_location



  private
  def store_location
  # store last url as long as it isn't a /users path
    session[:previous_url] = request.fullpath unless request.fullpath =~ /\/users/
  end
  def after_sign_in_path_for(resource)
    # binding.pry
    session[:previous_url] || root_path
  end
end
