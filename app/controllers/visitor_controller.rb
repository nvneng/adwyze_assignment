class VisitorController < ApplicationController
  before_action :authenticate_user!
  def home
    @records = Srecord.where(:user_id => current_user.id)
    @records = @records.reverse_order!

  end
end
