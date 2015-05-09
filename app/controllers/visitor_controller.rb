class VisitorController < ApplicationController
  before_action :authenticate_user!
  def home
    @records = Srecord.where(:user_id => current_user.id)
    @records = @records.reverse_order!
    #get all the search results of the user and select top 5 and place them in the home page
    #use angular JS to sync up
  end
end
